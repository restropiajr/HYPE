import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import {
  ClientError,
  errorMiddleware,
  authorizationMiddleware,
} from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new ClientError(400, 'Username, Password, and Email not found');
    }
    const checkDuplicateSql = `
          select *
          from "users"
          where "username" = $1 or "email" = $2
    `;
    const checkDuplicateParams = [username, email];
    const checkDuplicateResult = await db.query(
      checkDuplicateSql,
      checkDuplicateParams
    );
    const duplicates = checkDuplicateResult.rows;
    if (duplicates.length > 0) {
      duplicates.forEach((duplicate) => {
        if (duplicate.username === username) {
          throw new ClientError(409, 'Username is already taken');
        }
        if (duplicate.email === email) {
          throw new ClientError(409, 'Email is already taken');
        }
      });
    }
    const hashedPassword = await argon2.hash(password);
    const signUpUserSql = `
          insert into "users" ("username", "hashedPassword", "email")
          values ($1, $2, $3)
          returning "userId", "username";
    `;
    const signUpUserParams = [username, hashedPassword, email];
    const signUpUserResult = await db.query(signUpUserSql, signUpUserParams);
    const [user] = signUpUserResult.rows;
    const { userId } = user;
    const createUserCartSql = `
          insert into "carts" ("userId")
          values ($1)
          returning "cartId", "userId";
    `;
    const createUserCartParams = [userId];
    const createUserCartResult = await db.query(
      createUserCartSql,
      createUserCartParams
    );
    const [cart] = createUserCartResult.rows;
    if (!user || !cart) throw new ClientError(400, 'Cannot sign up user');
    res.status(201).json({ user, cart });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/log-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      throw new ClientError(401, 'Invalid login information');
    }
    const logInUserSql = `
          select "users"."userId", "users"."hashedPassword", "carts"."cartId"
          from "users"
          join "carts" on "users"."userId" = "carts"."userId"
          where "username" = $1
    `;
    const logInUserParams = [username];
    const logInUserResult = await db.query(logInUserSql, logInUserParams);
    const [user] = logInUserResult.rows;
    if (!user) throw new ClientError(401, 'Invalid login information');
    const { userId, hashedPassword, cartId } = user;
    const isMatching = await argon2.verify(hashedPassword, password);
    if (!isMatching) throw new ClientError(401, 'Invalid login information');
    const payload = { userId, username, cartId };
    const hashKey = process.env.TOKEN_SECRET;
    if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');
    const token = jwt.sign(payload, hashKey);
    res.status(200).json({ user: payload, token });
  } catch (error) {
    next(error);
  }
});

app.get('/api/products', async (req, res, next) => {
  try {
    const loadProductsSql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
    `;
    const loadProductsResult = await db.query(loadProductsSql);
    const products = loadProductsResult.rows;
    if (!products) throw new ClientError(404, `Products not found`);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/api/product/details/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (Number(productId) < 0)
      throw new ClientError(400, 'productId must be a positive integer');
    const loadProductSql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
          where "productId" = $1
    `;
    const loadProductParams = [productId];
    const loadProductResult = await db.query(loadProductSql, loadProductParams);
    const [product] = loadProductResult.rows;
    if (!product) throw new ClientError(404, `Product not found`);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

app.post(
  '/api/mycart/add-to-cart',
  authorizationMiddleware,
  async (req, res, next) => {
    try {
      const { productId, size, quantity } = req.body;
      const { cartId } = req.user;
      const checkPrevQuantitySql = `
            select *
            from "cartedItems"
            where "cartId" = $1 and "productId" = $2 and "size" = $3
      `;
      const checkPrevQuantityParams = [cartId, productId, size];
      const checkPrevQuantityResult = await db.query(
        checkPrevQuantitySql,
        checkPrevQuantityParams
      );
      const [PrevQuantity] = checkPrevQuantityResult.rows;
      if (PrevQuantity) {
        const totalQuantity = Number(PrevQuantity.quantity) + Number(quantity);
        if (totalQuantity <= 5) {
          const updateQuantitySql = `
                update "cartedItems"
                set "quantity" = "quantity" + $1
                where "cartId" = $2 and "productId" = $3 and "size" = $4
                returning *;
          `;
          const updateQuantityParams = [quantity, cartId, productId, size];
          const updateQuantityResults = await db.query(
            updateQuantitySql,
            updateQuantityParams
          );
          const [cartedItem] = updateQuantityResults.rows;
          if (!cartedItem)
            throw new ClientError(400, 'Cannot add product to cart');
          res.status(200).json(cartedItem);
        } else {
          throw new ClientError(
            400,
            'Maximum 5 quantity limit per order has been reached'
          );
        }
      } else {
        const addToCartSql = `
            insert into "cartedItems" ("cartId", "productId", "size", "quantity")
            values ($1, $2, $3, $4)
            returning *;
      `;
        const addToCartParams = [cartId, productId, size, quantity];
        const addToCartResult = await db.query(addToCartSql, addToCartParams);
        const [cartedItem] = addToCartResult.rows;
        if (!cartedItem)
          throw new ClientError(400, 'Cannot add product to cart');
        res.status(201).json(cartedItem);
      }
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  '/api/mycart/load-cart',
  authorizationMiddleware,
  async (req, res, next) => {
    try {
      const { userId } = req.user;
      const loadCartSql = `
          select "products"."productId", "products"."price", "products"."imageUrl", "cartedItems"."size", "cartedItems"."quantity"
          from "products"
          join "cartedItems" on "products"."productId" = "cartedItems"."productId"
          join "carts" on "cartedItems"."cartId" = "carts"."cartId"
          join "users" on "carts"."userId" = "users"."userId"
          where "users"."userId" = $1
          order by "cartedItems"."cartedItemId" desc;
    `;
      const loadCartParams = [userId];
      const loadCartResult = await db.query(loadCartSql, loadCartParams);
      const cartedItems = loadCartResult.rows;
      if (!cartedItems) throw new ClientError(404, `Carted products not found`);
      res.status(200).json(cartedItems);
    } catch (error) {
      next(error);
    }
  }
);

app.delete(
  '/api/mycart/empty-cart',
  authorizationMiddleware,
  async (req, res, next) => {
    try {
      const { cartId } = req.user;
      const emptyCartSql = `
         delete
         from "cartedItems"
         where "cartId" = $1;
    `;
      const emptyCartParams = [cartId];
      await db.query(emptyCartSql, emptyCartParams);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

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
      throw new ClientError(
        400,
        'username, password, and email are required fields'
      );
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
          throw new ClientError(400, 'username is already taken');
        }
        if (duplicate.email === email) {
          throw new ClientError(400, 'email is already taken');
        }
      });
    }
    const hashedPassword = await argon2.hash(password);
    const userSql = `
          insert into "users" ("username", "hashedPassword", "email")
          values ($1, $2, $3)
          returning "userId", "username";
    `;
    const userParams = [username, hashedPassword, email];
    const userResult = await db.query(userSql, userParams);
    const [user] = userResult.rows;
    const { userId } = user;
    const cartSql = `
          insert into "carts" ("userId")
          values ($1)
          returning "cartId", "userId";
    `;
    const cartParams = [userId];
    const cartResult = await db.query(cartSql, cartParams);
    const [cart] = cartResult.rows;
    res.status(201).json({ user, cart });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/log-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      throw new ClientError(401, 'invalid login');
    }
    const userSql = `
          select "users"."userId", "users"."hashedPassword", "carts"."cartId"
          from "users"
          join "carts" on "users"."userId" = "carts"."userId"
          where "username" = $1
    `;
    const userParams = [username];
    const userResult = await db.query(userSql, userParams);
    const [user] = userResult.rows;
    if (!user) throw new ClientError(401, 'invalid login');
    const { userId, hashedPassword, cartId } = user;
    const isMatching = await argon2.verify(hashedPassword, password);
    if (!isMatching) throw new ClientError(401, 'invalid login');
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
    const productsSql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
    `;
    const productsResult = await db.query(productsSql);
    const products = productsResult.rows;
    if (!products) throw new ClientError(400, `cannot find products`);
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
    const productSql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
          where "productId" = $1
    `;
    const productParams = [productId];
    const productResult = await db.query(productSql, productParams);
    const [product] = productResult.rows;
    if (!product)
      throw new ClientError(
        400,
        `cannot find product with productId: ${productId}`
      );
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
      const { cartId, productId, size, quantity } = req.body;
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
          const updatedQuantityResults = await db.query(
            updateQuantitySql,
            updateQuantityParams
          );
          const [updatedQuantity] = updatedQuantityResults.rows;
          res.status(201).json(updatedQuantity);
        } else {
          throw new ClientError(400, 'There is a 5 quantity limit per order.');
        }
      } else {
        const addToCartSql = `
            insert into "cartedItems" ("cartId", "productId", "size", "quantity")
            values ($1, $2, $3, $4)
            returning *;
      `;
        const addToCartParams = [cartId, productId, size, quantity];
        const addToCartResult = await db.query(addToCartSql, addToCartParams);
        const [cart] = addToCartResult.rows;
        res.status(201).json(cart);
      }
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

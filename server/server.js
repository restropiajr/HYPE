import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware } from './lib/index.js';
// import {
//   ClientError,
//   errorMiddleware,
//   authorizationMiddleware,
// } from './lib/index.js';

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
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      throw new ClientError(
        400,
        'username, password, and email are required fields'
      );
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
          insert into "users" ("username", "hashedPassword", "email")
          values ($1, $2, $3)
          returning *;
    `;
    const params = [username, hashedPassword, email];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
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
    const sql = `
          select "userId", "hashedPassword"
          from "users"
          where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) throw new ClientError(401, 'invalid login');
    const { userId, hashedPassword } = user;
    const isMatching = await argon2.verify(hashedPassword, password);
    if (!isMatching) throw new ClientError(401, 'invalid login');
    const payload = { userId, username };
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
    const sql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
    `;
    const result = await db.query(sql);
    const products = result.rows;
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/api/details/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId)
      throw new ClientError(400, 'productId must be a positive integer');
    const sql = `
          select "productId", "name", "category", "price", "description", "imageUrl"
          from "products"
          where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    const [product] = result.rows;
    if (!product)
      throw new ClientError(
        400,
        `cannot find product with productId ${productId}`
      );
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

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

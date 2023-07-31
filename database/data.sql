-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

INSERT INTO "products" ("productId", "name", "category", "price", "description", "imageUrl")
VALUES
  (1, 'Product 1', 'Category A', 10.99, 'Description for Product 1', 'https://unsplash.com/photos/V8khtfwQ-fM'),
  (2, 'Product 2', 'Category B', 19.99, 'Description for Product 2', 'https://unsplash.com/photos/9SABtP1KBWk'),
  (3, 'Product 3', 'Category A', 15.49, 'Description for Product 3', 'https://unsplash.com/photos/Ra4comqu9KA'),
  (4, 'Product 4', 'Category C', 17.50, 'Description for Product 4', 'https://unsplash.com/photos/qAPUeAQxVkE'),
  (5, 'Product 5', 'Category B', 12.25, 'Description for Product 5', 'https://unsplash.com/photos/TpQzi23vsLA');

INSERT INTO "users" ("username", "hashedPassword", "email")
VALUES
  ('user1', 'hashed_password_1', 'user1@example.com'),
  ('user2', 'hashed_password_2', 'user2@example.com'),
  ('user3', 'hashed_password_3', 'user3@example.com'),
  ('user4', 'hashed_password_4', 'user4@example.com'),
  ('user5', 'hashed_password_5', 'user5@example.com')
RETURNING *;

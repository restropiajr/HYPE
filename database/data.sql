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
  (1, 'Product 1', 'shoe', 10.99, 'Description for Product 1', '/products/image-1.jpg'),
  (2, 'Product 2', 'accessory', 19.99, 'Description for Product 2', '/products/image-2.jpg'),
  (3, 'Product 3', 'shoe', 15.49, 'Description for Product 3', '/products/image-3.jpg'),
  (4, 'Product 4', 'top', 17.50, 'Description for Product 4', '/products/image-4.jpg'),
  (5, 'Product 5', 'bottom', 12.25, 'Description for Product 5', '/products/image-5.jpg');

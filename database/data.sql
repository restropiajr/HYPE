-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "products" ("productId", "name", "category", "price", "description", "imageUrl")
values
  (1, 'Balenciaga Track', 'shoe', 1200.00, 'Elevate your sneaker game with the Balenciaga Track trainer featuring a unique caged upper design.', '/products/balenciaga-track.jpg'),
  (2, 'Balenciaga TripleS', 'shoe', 1200.00, 'Experience unparalleled comfort and style with the Balenciaga TripleS sneaker, boasting a distinctive double foam and mesh construction.', '/products/balenciaga-triples.jpg'),
  (3, 'BAPE Bearbrick', 'accessory', 1000.00, 'Celebrate the Japanese New Year with the limited edition BAPE Bearbrick by Medicom Toy, featuring iconic BAPE design elements.', '/products/bape-bearbrick.jpg'),
  (4, 'BAPE Camo Black Shirt', 'top', 200.00, 'Express your streetwear style with the BAPE Camo Black Shirt, a comfortable and trendy cotton jersey T-shirt featuring the iconic camo print.', '/products/bape-camo-shirt-black.jpg'),
  (5, 'BAPE Camo White Shirt', 'top', 200.00, 'Level up your wardrobe with the BAPE Camo White Shirt, a stylish cotton jersey T-shirt showcasing the iconic BAPE camo pattern.', '/products/bape-camo-shirt-white.jpg'),
  (6, 'BAPE Camo Black Shorts', 'bottom', 350.00, 'Stay on-trend and comfortable with the BAPE Camo Black Shorts, featuring a shark-print design and a relaxed fit.', '/products/bape-camo-shorts-black.jpg'),
  (7, 'BAPE Milo Rug', 'accessory', 750.00, 'Add a touch of signature style to your space with the BAPE Milo Rug, a round tufted rug featuring the iconic graphic in a range of colors.', '/products/bape-milo-rug.jpg'),
  (8, 'Fear of God White Hoodie', 'top', 300.00, 'Make a statement with the Fear of God White Hoodie, printed with "Essentials" across the front and featuring unique logo details.', '/products/fear-of-god-hoodie-white.jpg'),
  (9, 'Fear of God x Nike Black Shorts', 'bottom', 400.00, 'Combine basketball heritage with contemporary fashion in the Fear of God x Nike Black Shorts, designed for both performance and style.', '/products/fear-of-god-nike-shorts-black.jpg'),
  (10, 'Fear of God White Shorts', 'bottom', 400.00, 'Stay fresh and stylish in the Fear of God White Shorts, featuring a drawstring waist and black zipper accents.', '/products/fear-of-god-shorts-white.jpg'),
  (11, 'Jordan Black Cement 3', 'shoe', 450.00, 'Step up your sneaker game with the iconic Air Jordan 3 "Black Cement", featuring a classic mix of leather, elephant print, and visible Air.', '/products/jordan-black-cement-3.jpg'),
  (12, 'Jordan Black/Red 1', 'shoe', 500.00, 'Elevate your sneaker collection with the Air Jordan 1 High Bred Patent, showcasing a striking black and red patent leather upper.', '/products/jordan-bred-1.jpg'),
  (13, 'Jordan Black/Red 11', 'shoe', 350.00, 'Make a bold statement with the Jordan 11 in Black/Red, featuring shiny patent leather overlays and iconic red detailing.', '/products/jordan-bred-11.jpg'),
  (14, 'Jordan Mocha 1', 'shoe', 750.00, 'Pay homage to the past with the Jordan 1 High Dark Mocha, combining Sail leather, black leather, and Mocha suede for a unique look.', '/products/jordan-mocha-1.jpg'),
  (15, 'Jordan OFF WHITE x UNC 1', 'shoe', 1500.00, 'Experience the collaboration between Off-White and Jordan with the Off-White x UNC 1, featuring deconstructed leather and iconic detailing.', '/products/jordan-offwhite-1.jpg'),
  (16, 'Kith Blue Hoodie', 'top', 300.00, 'Stay cozy and stylish in the Kith Blue Hoodie, featuring a drawcord-adjustable hood and Kith logo embroidery.', '/products/kith-hoodie-blue.jpg'),
  (17, 'Kith Grey Hoodie', 'top', 300.00, 'Elevate your streetwear look with the Kith Grey Hoodie, boasting a comfortable fit and the signature Kith logo embroidery.', '/products/kith-hoodie-grey.jpg'),
  (18, 'Off White Industrial Belt', 'accessory', 450.00, 'Complete your outfit with the iconic Off-White Industrial Belt, featuring recognizable branding and attention-grabbing yellow and black design.', '/products/off-white-industrial-belt.jpg'),
  (19, 'Palace Green Hoodie', 'top', 750.00, 'Embrace streetwear style with the Palace Green Hoodie, featuring the Palace logo print on the front and back for a distinctive look.', '/products/palace-hoodie-green.jpg'),
  (20, 'Stussy x Nike White Shirt', 'top', 250.00, 'Celebrate global exploration with the Nike x Stussy The Wide World Tribe T Shirt, featuring a unique graphic print inspired by travel.', '/products/stussynike-shirt-white.jpg'),
  (21, 'Supreme Bottle', 'accessory', 100.00, 'Stay hydrated in style with the Supreme Bottle SS18, featuring a sleek design and high-quality aluminum construction.', '/products/supreme-bottle.jpg'),
  (22, 'Supreme Fanny Pack', 'accessory', 500.00, 'Carry your essentials in style with the Supreme Waist Bag SS18, boasting dual pockets and the iconic Supreme branding.', '/products/supreme-fanny-pack.jpg'),
  (23, 'Supreme Black Mesh Shorts', 'bottom', 300.00, 'Stay comfortable and fashionable in the Supreme Small Box Baggy Mesh Shorts Black, a versatile addition to your wardrobe.', '/products/supreme-mesh-short-black.jpg'),
  (24, 'Supreme x North Face White Jacket', 'top', 1200.00, 'Stay warm and stylish with the collaborative Supreme x North Face White Jacket, featuring color blocking, chest pockets, and iconic logos.', '/products/supremenorthface-jacket-white.jpg'),
  (25, 'Supreme Red Camo Backpack', 'accessory', 300.00, 'Carry your essentials with flair using the Supreme Backpack SS21 Red Camo, a durable and eye-catching accessory.', '/products/supreme-red-backpack.jpg'),
  (26, 'Yeezy Foam Rnnrs', 'shoe', 250.00, 'Make a bold fashion statement with the adidas Yeezy Foam RNNR MX Cream Clay, featuring a unique multicolor streaked camo pattern.', '/products/yeezy-foam-rnnrs.jpg'),
  (27, 'Yeezy Boost 350 Turtledoves', 'shoe', 1000.00, 'Step into comfort and style with the iconic adidas Yeezy Boost 350 Turtle Dove, featuring a distinctive grey and brown patterned Primeknit upper.', '/products/yeezy-turtledoves.jpg'),
  (28, 'Yeezy Boost 700 Waverunners', 'shoe', 500.00, 'Experience the chunky 90s-inspired look with the Yeezy 700 Boost Wave Runner, featuring a mix of materials, thick Boost sole, and vibrant accents.', '/products/yeezy-waverunners.jpg');

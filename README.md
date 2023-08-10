## HYPE

TBD
  
 **A dynamic website that allows users to purchase view and checkout streetwear product.**
 
</div>

## Why I Built This

TBD

## Technologies Used

- PostgreSQL
- Express
- React.js
- Node.js
- Tailwind CSS
- AWS EC2
- Dokku
- Figma
- DBDesigner
  
## Features

1. User can view the disclaimer modal.
2. User can view the home page.
3. User can create an account.
4. User can log in to their account.
5. User can log out of their account.
6. User can view the list of products.
7. User can sort the list of products.
8. User can search through the list of products.
9. User can filter through the list of products.
10. User can view the product details.
11. User can add products to their shopping cart.
12. User can view their shopping cart.
13. User can update the quantity of products in the shopping cart.
14. User can delete products from the shopping cart.
15. User can checkout products with a form from the shopping cart.
16. User can view a checkout success page.
17. User can view contact information.
18. User can view a not found page.
  
## Link Demo

TBD

## Preview

TBD

## Development

### System Requirements
- PostgreSQL
- Express
- React
- Node.js
- NPM 6 or higher

### Getting Started
1. Clone the repository.
2. Install Dependencies: **npm install**
3. Make a copy of the .env file.
4. Create a database: **createdb name**
5. Update the "changeMe" part of the DATABASE_URL env variable to your database name.
6. Update the "changeMe" part of the TOKEN_SECRET env variable with a secret key for token generation.
7. Update the "changeMe" part of the STRIPE_SECRET_KEY env variable with your Stripe account's Secret Key.
8. Start PostgreSQL: **sudo service postgresql start**
9. Import Database: **npm run db:import**
10. Run the Application: **npm run dev**
8. Open your web browser and navigate to **http://localhost:3000** to view the running application.

Notes
- Ensure you've created a Stripe account and have a valid Secret Key for the STRIPE_SECRET_KEY environment variable.

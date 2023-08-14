## HYPE

<p align="center">
  <img src="https://github.com/restropiajr/HYPE/assets/66459527/722918e3-87b6-4876-99b1-54298a158967" width=15% height=15%>
</p>

<p align="center">
  <img src="https://github.com/restropiajr/HYPE/assets/66459527/97ed6042-7e1e-4ed4-82ed-9b472d664021" width=30% height=30%>
</p>

<div align="center">
  
**An interactive Ecommerce website that allows users to explore, purchase, and checkout a collection of streetwear products.**
 
</div>

## Why I Built This

As someone who's into streetwear collecting, I decided to channel that passion into a project. This venture has given me a chance to showcase the skills I've picked up learning about the PERN stack, turning them into an interactive Ecommerce website.

## Technologies Used

- React.js
- Node.js
- Express.js
- PostgreSQL
- Tailwind CSS
- AWS EC2
- Dokku
- Figma
- DBDesigner
- Argon2
- JSON Web Token
- Dotenv
- Stripe
  
## Features

- User can view the disclaimer modal.
- User can view the home page.
- User can create an account.
- User can log in to their account.
- User can log out of their account.
- User can view the list of products.
- User can sort the list of products.
- User can search through the list of products.
- User can filter through the list of products.
- User can view the product details.
- User can add products to their shopping cart.
- User can view their shopping cart.
- User can update the quantity of products in the shopping cart.
- User can delete products from the shopping cart.
- User can checkout products with a form from the shopping cart.
- User can view a checkout success page.
- User can view contact information.
- User can view a not found page.
  
## Link Demo

Try the website at https://hype.restropiajr.com/

## Preview

<p align="center">
  <img src="https://github.com/restropiajr/HYPE/assets/66459527/9e4c43f5-e786-4653-8fe7-213c10866e4e">
</p>

<p align="center">
  <img src="https://github.com/restropiajr/HYPE/assets/66459527/ae4ff6c7-79c9-4d16-8ab9-f6dd78a0f243">
</p>

## Development

### System Requirements
- React.js
- Node.js
- Express.js
- PostgreSQL
- npm

### Getting Started
1. Clone the repository.
2. Install Dependencies: **npm install**
3. Make a copy of the .env file.
4. Create a database: **createdb name**
5. Update the "changeMe" part of the DATABASE_URL environment variable to your database name.
6. Update the "changeMe" part of the TOKEN_SECRET environment variable with a secret key for token generation.
7. Update the "changeMe" part of the STRIPE_SECRET_KEY environment variable with your Stripe account's Secret Key.
8. Start PostgreSQL: **sudo service postgresql start**
9. Import Database: **npm run db:import**
10. Run the Application: **npm run dev**
8. Open your web browser and navigate to **http://localhost:3000** to view the running application.

#### Notes
- Ensure you've created a Stripe account and have a valid Secret Key for the STRIPE_SECRET_KEY environment variable.

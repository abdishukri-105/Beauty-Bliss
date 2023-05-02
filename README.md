# Beauty-Bliss

# Description
This is an e-commerce site that sells a wide variety of beauty products to customers in need. The site is built using Ruby on Rails for the backend and ReactJS for the frontend. It also uses PostgreSQL as the database, and Rspec as the testing framework.

# Getting Started
Prerequisites
To run this app on your local machine, you must have the following installed:

* Ruby v2.7..+
* Rails v7.0.+
* PostgreSQL 13.2
* Node.js 14.16.1
* rspec v3.12
* sqlite3

# Installing
To install the app, follow these steps:

Clone the repo: 
git clone https://github.com/abdishukri-105/Beauty-Bliss
Then; cd Beauty-Bliss

Install dependencies: 
bundle install or yarn install

Create the database:
rails db:create

Run the migrations:
rails db:migrate

Seed the database: 
rails db:seed

Start the server: rails s
You can then access the app at http://localhost:3000.

Running the Tests
To run the tests, use the following command:

bash
bundle exec rspec

Deployment
This app can be deployed to a production environment using a platform such as Heroku. Be sure to set the RAILS_ENV environment variable to production.

# MVP Features
The app has the following MVP features:

Login
Create an account
Cart section for viewing all beauty products added to cart
Checkout section for order purchase
Simulation of a payment process by generating address, billing information, and invoices for every order submitted.  

Admin Features
The app also has the following admin features:

Perform CRUD operations of beauty products.
Add users based on roles to manage beauty products and orders made.
View analytics of different beauty products within the platform.
View analytics of orders made by customers within the platform.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.

# Beauty Bliss E-commerce
Beauty Bliss is an e-commerce platform that sells a wide range of beauty products. It consists of a frontend built with React and a backend built with Ruby on Rails.

##  Links
- [deployed api](https://beaty-product-shop.onrender.com)
- [LIve link](https://beauty-bliss-ul2a.vercel.app/products)


## Beauty Bliss Frontend
The frontend is a responsive web application optimized for both desktop and mobile devices. It uses React, React Router, Axios, Tailwindcss, and Font Awesome to provide the following functionalities to the users:

- View a list of beauty products
- View the details of a beauty product
- Add a beauty product to the cart
- View the cart
- Remove a beauty product from the cart
- Create an account
- Log in to an existing account
- Log out of the account

#### The app includes several user pages, including: 
 - the landing page, product page, 
 - cart page, checkout page, 
 -  confirm page.
 
 #### It also includes: 
 -  an admin section where users with administrative privileges can add, edit, and delete products.

## Beauty Bliss Backend
The backend is built with Ruby on Rails and uses PostgreSQL as the database and RSpec as the testing framework. It provides several API endpoints that the frontend uses to retrieve and manipulate data. The models used in the backend are:

- BeautyProduct: stores information about a beauty product, including its name, description, price, image URL, category, and quantity.
- Cart: stores information about a user's cart, including the beauty products in the cart, the quantity of each product, and whether the cart is active.
- CartItem: associates a beauty product with a cart and stores the quantity of the product in the cart.
- Customer: stores information about a customer, including their name, email, phone number, and address.
- Order: stores information about an order, including the total amount, the cart data, and the customer who placed the order.
- User: stores information about a user, including their username, email, and password digest.

### Setup
To set up the Beauty Bliss backend, follow these steps:

Clone the repository:
       
    
       git clone https://github.com/abdishukri-105/Beauty-Bliss.git

                    
### Install dependencies:

    bundle install
### Create and migrate the database:


    rake db:create
    rake db:migrate
    Seed the database:
    Copy code
    rake db:seed

### Start the server:

    rails s



## To set up the Beauty Bliss frontend, follow these steps:
#### Clone the repository:


    https://github.com/abdishukri-105/Beauty-Bliss

#### Install dependencies:

    npm install

#### Start the development server:

    npm start

#### Build the production version:


    npm run build


## Authors
- Abdishukri Mohamed (scrum master)
- Mutheki Njora
- Griffins Ngeno
- Casey Ochieng
- Louis Okwaro
- Victor Aketch

## Conclusion
Beauty Bliss is an e-commerce platform that provides an easy way for customers to purchase beauty products online. The frontend and backend work together seamlessly to provide users with a great shopping experience.
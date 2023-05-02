### BEAUTY BLISS
This is an e-commerce site that sells a wide variety of beauty products to customers in need.
The site is built using Ruby on Rails for the backend and ReactJS for the frontend.
It also uses PostgreSQL as the database, and Rspec as the testing framework.
 - [Project repository](https://github.com/abdishukri-105/Beauty-Bliss)
 - [deployed api](https://beaty-product-shop.onrender.com)
## Built With
This application has been built with the following tools:
- **Ruby `v2.7.+`**
- **SQlite3 `v1.6`**
- **ActiveRecord `v7.0.4`**
- **Puma `v6.1`**
- **pg `v1.1`**
- **rspec `v3.12`**
## Setup
You can setup this repository by following this manual
1. Clone the repository
    ```{shell}
   git clone https://github.com/abdishukri-105/Beauty-Bliss
   ```
2. Ensure the ruby gems are setup in your machine
    ```{shell}
   bundle install
   ```
3. Perform any pending database migrations
   ```{shell}
   rake db:migrate
   ```
4. Run the application
    ```{shell}
    rake start
    ```
5. Open the application from your browser
    ```
   http://127.0.0.1:3000
   ```

### MODELS
Database schema definitions.
#### BEAUTY_PRODUCTS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| name          | string    |
| description   |  text     |
| price         | float     |
| image_url     | String    |
| category      | String    |
| qty           | integer   |
#### CART_ITEMS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| quantity      | integer   |
#### CARTS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| beauty_product_id|integer |
| quantity         |integer |
| active           |boolean |
| user_id          |bigint  |
#### CUSTOMERS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| name          | string    |
| email         | string    |
| phone         | string    |
| address       | text      |
#### ORDERS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| amount        |   float   |
|cart_data      |   string  |
| user_id       |   bigint  |
#### USERS
| COLUMN        | DATA TYPE |
|---------------|-----------|
| username      | string    |
| email         | string    |
|password_digest| string    |


## Author
- Abdishukri Mohamed - scrum master 
- Mutheki Njora
- Griffins ngeno
- Casey Ochieng 
- Louis Okwaro
- Victor Aketch 
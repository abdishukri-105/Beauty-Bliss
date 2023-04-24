Rails.application.routes.draw do
  # resources :users
  # resources :carts
  # resources :orders
  resources :products
  # mount Rswag::Ui::Engine => '/api-docs'
  # mount Rswag::Api::Engine => '/api-docs'

  # User Routes
  # post '/user/register', to: "user#create_account"
  # post '/user/login', to: "user#login_account"
  # delete '/user/logout', to: "user#logout_account"
  # post "/login", to: "sessions#create"
  # post '/register', to: "users#create"
  # delete "/logout", to: "sessions#destroy"

    post '/users', to: 'users#register'
    post '/login', to: 'users#login'
    delete '/logout', to: 'users#logout'

  # Products Routes
  # post '/products/create', to: "products#create"
  # get '/products', to: "products#index"
  # put '/products/:id/update', to: "products#update"
  # delete '/products/:id/destroy', to: "products#delete"

  # Cart Routes
  get '/carts', to: "carts#show_cart"
  post '/carts/add', to: "carts#add_to_cart"
  delete '/carts/:cart_id/destroy', to: "carts#delete_from_cart"
  delete '/carts/destroy/all', to: "carts#clear_cart"

  # Order Routes
  post '/orders/create', to: "orders#make_order"
  get '/orders/list', to: "orders#show_orders"
  get '/orders/filter/:order_status', to: "orders#filter_orders_with_status" # FILTER USER ORDERS WITH STATUS
  put '/orders/:order_id/update/:order_status', to: "orders#update_order_status" # UPDATE ORDER STATUS OF A GIVEN ORDER

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

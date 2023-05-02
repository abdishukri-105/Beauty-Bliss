Rails.application.routes.draw do
  resources :cart_items
  resources :beauty_products
  resources :customers

  resources :carts

  resources :products
 

  post '/users', to: 'users#register'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'



  # Cart Routes
  get '/carts', to: "carts#show_cart"
  post '/carts/add', to: "carts#add_to_cart"


  # Order Routes
  post '/orders/create', to: "orders#make_order"
  get '/orders/list', to: "orders#show_orders"
  get '/orders/filter/:order_status', to: "orders#filter_orders_with_status" 
  put '/orders/:order_id/update/:order_status', to: "orders#update_order_status" 

 
end

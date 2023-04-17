Rails.application.routes.draw do
  # resources :categories
  # resources :order_items
  # resources :orders
  # resources :users
  resources :products, only: [:index, :show]
  # resources :customers
 
end

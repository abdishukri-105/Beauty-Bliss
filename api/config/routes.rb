Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # resources :categories
  # resources :order_items
  # resources :orders
  post "/signup", to: "users#create" 
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :products, only: [:index, :show]
  # resources :customers
 
end

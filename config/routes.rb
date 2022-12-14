Rails.application.routes.draw do
  
  resources :users do
    resources :favorites, only: [:index, :create]
    delete "/favorites", to: "favorites#destroy"
  end

  resources :books, only: [:index, :show, :create, :update, :destroy] do
    resources :reviews, only: [:index, :create]
  end

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

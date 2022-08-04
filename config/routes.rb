Rails.application.routes.draw do
  
  resources :users do
    resources :favorites, only: [:index, :create, :destroy]
  end

  resources :books, only: [:index, :show, :create, :update, :destroy] do
    resources :reviews, only: [:index, :create]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

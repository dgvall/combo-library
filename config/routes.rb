Rails.application.routes.draw do
  
  # resources :character_inputs
  # resources :game_inputs
  # resources :inputs
  # resources :user_bookmarks
  # resources :users
  # resources :combos
  get "/characters/:character_slug", to: "characters#show"

  post "/characters/:character_id/filter_combos", to: "combos#filter_combos"

  resources :characters do
    resources :combos, only: [:create]
  end

  resources :games, only: [:index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  
  # resources :game_inputs
  # resources :inputs
  # resources :user_bookmarks
  # resources :users
  # resources :combos
  scope '/api' do

    get "/games/:game_slug/characters/:character_slug", to: "characters#show"

    post "/games/:game_slug/characters/:character_slug/combos", to: "combos#unfiltered_combos"
    post "/games/:game_slug/characters/:character_id/filter_combos", to: "combos#filter_combos"
    post "/users/:username/characters/:character_slug/filter_bookmarked_combos", to: "user_bookmarks#filter_bookmarked_combos"

    resources :characters do
      resources :combos, only: [:create, :update, :destroy]
    end

    resources :users do 
      resources :user_bookmarks, only: [:create, :destroy]
      
    end
      resources :games, only: [:index]

    post "/signup", to: "users#create"
    get "/me", to: "users#show"

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

class CharactersController < ApplicationController

  skip_before_action :authorize, only: :show

  def show
    game = Game.find_by(slug: params[:game_slug])
    character = Character.find_by(slug: params[:character_slug])
    if character.game_id === game.id 
      render json: character, status: :ok
    else 
      render json: {error: "Character not found"}, status: :not_found
    end
  end
end

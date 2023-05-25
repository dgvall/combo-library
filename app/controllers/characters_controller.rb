class CharactersController < ApplicationController

  skip_before_action :authorize, only: :show

  def show
    game = Game.find_by(slug: params[:game_slug])
    if !game
      return render json: { error: "Game not found"}, status: :not_found
    end

    character = game.characters.find_by(slug: params[:character_slug])
    if character
      render json: character, status: :ok
    else 
      render json: {error: "Character not found"}, status: :not_found
    end
  end
end

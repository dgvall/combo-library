class CharactersController < ApplicationController

  skip_before_action :authorize, only: [:show, :show_upload_reqs]

  def show
    character = Character.find_by(slug: params[:character_slug])
    render json: character, status: :ok
  end
end

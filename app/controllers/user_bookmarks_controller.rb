class UserBookmarksController < ApplicationController
  
  def filter_bookmarked_combos
    user = User.find_by(username: params[:username])
    character = Character.find_by(slug: params[:character_slug])
    combos = user.bookmarked_combos.where(character_id: character.id)

    if params[:filters].present?
      filtered_combos = combos.where(filter_params)
      render json: filtered_combos
    end
  end

  private

  def filter_params
    params.require(:filters).permit(:starter, :hit_type, :meterless, :location)
  end
end

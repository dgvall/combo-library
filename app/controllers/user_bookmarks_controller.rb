class UserBookmarksController < ApplicationController
  skip_before_action :authorize, only: :filter_bookmarked_combos
  rescue_from ActiveRecord::RecordNotFound, with: :unprocessable_entity

  def filter_bookmarked_combos
    user = User.find_by(username: params[:username])
    character = Character.find_by(slug: params[:character_slug])
    combos = user.bookmarked_combos.where(character_id: character.id)

    if params[:filters].present?
      filtered_combos = combos.where(filter_params)
      render json: filtered_combos
    end
  end

  def create
    bookmarked_combo = Combo.find(params[:combo_id])
      if @current_user.bookmarked_combos.include?(bookmarked_combo)
        render json: {error: 'Combo bookmark already exists'}
      else
        @current_user.bookmarked_combos << bookmarked_combo
        render json: bookmarked_combo, status: :created
      end
  end

  def destroy
    bookmarked_combo = @current_user.user_bookmarks.find_by(combo_id: params[:id])
    if(bookmarked_combo)
      bookmarked_combo.destroy
      head :no_content
    else
      render json: { error: 'Combo bookmark not found' }, status: :not_found
    end
  end

  private

  def filter_params
    params.require(:filters).permit(:starter, :hit_type, :meterless, :location)
  end

  def unprocessable_entity
    render json: { error: 'User or combo bookmark not found'}, status: :not_found
  end
end

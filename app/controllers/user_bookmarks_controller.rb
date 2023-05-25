class UserBookmarksController < ApplicationController
  skip_before_action :authorize, only: [:filter_bookmarked_combos, :unfiltered_combos]
  rescue_from ActiveRecord::RecordNotFound, with: :unprocessable_entity
  require 'will_paginate/array'

  def filter_bookmarked_combos
    game = Game.find(params[:game_id])
    character = Character.find(params[:character_id])
    user = User.find_by(username: params[:username])

    if params[:filters].present? && user && character && game && game.id == character.game_id
      per_page = 3
      current_page = params[:current_page].to_i || 1
      
      combos = user.bookmarked_combos.where(character_id: character.id)
      filtered_combos = combos.where(filter_params).order(created_at: :desc)
      paginated_combos = filtered_combos.paginate(page: current_page, per_page: per_page)
  
      render json: {
        combos: ActiveModel::Serializer::CollectionSerializer.new(paginated_combos, serializer: ComboSerializer),
        total_pages: paginated_combos.total_pages
      }, status: :ok
    else
      render json: { error: "Character not found" }, status: :not_found
    end
  end

  def unfiltered_combos
    game = Game.find(params[:game_id])
    character = Character.find(params[:character_id])
    user = User.find_by(username: params[:username])
  
    if user && game && character && game.id == character.game_id
      per_page = 3
      current_page = params[:current_page].to_i || 1
  
      combos = user.bookmarked_combos.where(character_id: character.id).order(created_at: :desc)
      paginated_combos = combos.paginate(page: current_page, per_page: per_page)
  
      render json: {
        combos: ActiveModel::Serializer::CollectionSerializer.new(paginated_combos, serializer: ComboSerializer),
        total_pages: paginated_combos.total_pages
      }, status: :ok
    else
      render json: { error: "Character not found" }, status: :not_found
    end
  end

  def create
    bookmarked_combo = Combo.find(params[:combo_id])
      if @current_user.bookmarked_combos.include?(bookmarked_combo)
        render json: {error: 'Combo bookmark already exists'}, status: :unprocessable_entity
      else
        @current_user.bookmarked_combos << bookmarked_combo
        render json: bookmarked_combo, status: :created
      end
  end

  def destroy
    bookmarked_combo = @current_user.user_bookmarks.find_by(combo_id: params[:id])
    if(bookmarked_combo)
      if (bookmarked_combo.combo.user_id != @current_user.id)
        bookmarked_combo.destroy
        head :no_content
      else render json: { error: 'User submitted combos must be bookmarked'}, status: :unprocessable_entity
      end
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

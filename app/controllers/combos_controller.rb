class CombosController < ApplicationController
  skip_before_action :authorize, only: :filter_combos
  require 'will_paginate/array'

  def filter_combos
    game = Game.find_by(slug: params[:game_slug])
    character = Character.find(params[:character_id])
    combos = character.combos

    if params[:filters].present? && character && game && game.id == character.game_id
      # filtered_combos = combos.where(filter_params).order(created_at: :desc)
      # render json: filtered_combos

      per_page = 3
      current_page = params[:current_page].to_i || 1
  
      combos = character.combos.where(filter_params).order(created_at: :desc)
      paginated_combos = combos.paginate(page: current_page, per_page: per_page)
  
      render json: {
        combos: ActiveModel::Serializer::CollectionSerializer.new(paginated_combos, serializer: ComboSerializer),
        total_pages: paginated_combos.total_pages
      }, status: :ok
    else
      render json: { error: "Character not found" }, status: :not_found
    end
    # end
  end

  # post "games/:game_slug/characters/:character_slug/combos", to: "combos#unfiltered_combos"

  def unfiltered_combos
    game = Game.find_by(slug: params[:game_slug])
    character = Character.find_by(slug: params[:character_slug])
  
    if game && character && game.id == character.game_id
      per_page = 3
      current_page = params[:current_page].to_i || 1
  
      combos = character.combos.order(created_at: :desc)
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
    character = Character.find(params[:character_id])
    combo = character.combos.build(combo_params)
    combo.user = @current_user

    if combo.save
      @current_user.bookmarked_combos << combo
      render json: combo, status: :created
    else
      render json: {errors: combo.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    combo = Combo.find(params[:id])
    if combo.user_id == @current_user.id
      if combo.update(combo_params)
        render json: combo, status: :ok
      else
        render json: {errors: combo.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

  def destroy
    combo = Combo.find(params[:id])
    if combo.user_id == @current_user.id
      combo.destroy
      head :no_content
    else
      render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

  private

  def combo_params
    params.require(:combo).permit(:inputs, :youtube_id, :starter, :location, :hit_type, :meterless, :author_notes, :character_id, :damage)
  end

  def filter_params
    params.require(:filters).permit(:starter, :hit_type, :meterless, :location, :current_page)
  end
end

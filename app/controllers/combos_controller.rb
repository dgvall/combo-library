class CombosController < ApplicationController
  skip_before_action :authorize, only: :filter_combos

  def filter_combos
    character = Character.find(params[:character_id])
    combos = character.combos

    if params[:filters].present?
      filtered_combos = combos.where(filter_params)
      render json: filtered_combos
    end
  end

  def create
    character = Character.find(params[:character_id])
    combo = character.combos.build(combo_params)
    combo.user = @current_user

    if combo.save
      render json: combo, status: :created
    else
      render json: {errors: combo.errors.full_messages}, status: :unprocessable_entity
    end

  end

  private

  def combo_params
    params.require(:combo).permit(:inputs, :youtube_id, :starter, :location, :hit_type, :meterless, :author_notes, :character_id, :damage)
  end

  def filter_params
    params.require(:filters).permit(:starter, :hit_type, :meterless, :location)
  end
end

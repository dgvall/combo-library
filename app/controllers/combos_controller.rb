class CombosController < ApplicationController

  def create
    character = Character.find(params[:character_id])
    combo = character.combos.build(combo_params)
    combo.user = @current_user

    if combo.save
      render json: combo, status: :created
    else
      render json: combo.errors, status: :unprocessable_entity
    end

  end

  private

  def combo_params
    params.permit(:inputs, :youtube_id, :starter, :location, :hit_type, :meterless, :author_notes)
  end
end

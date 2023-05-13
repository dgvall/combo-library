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
    params.require(:filters).permit(:starter, :hit_type, :meterless, :location)
  end
end

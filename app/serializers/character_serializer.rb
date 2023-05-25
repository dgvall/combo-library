class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :starters, :image_url, :name, :slug, :game_slug

  # has_many :inputs
  # has_many :combos
  # belongs_to :game

  # def combos
  #   object.combos.order(created_at: :desc)
  # end

  def starters
    object.starters.split("_")
  end

  def game_slug
    object.game.slug
  end

  # def inputs
  #   inputs = object.inputs.group_by(&:input_type)
  #   inputs
  # end
end

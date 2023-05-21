class GameCharacterSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :slug

  # has_many :inputs
  # has_many :combos
  # belongs_to :game

  # def combos
  #   object.combos.order(created_at: :desc)
  # end

  # def starters
  #   object.starters.split(" ")
  # end

  # def inputs
  #   inputs = object.inputs.group_by(&:input_type)
  #   inputs
  # end
end
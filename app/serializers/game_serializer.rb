class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :inputs, :hit_types

  has_many :characters, serializer: GameCharacterSerializer
  has_many :inputs

  def inputs
    inputs = object.inputs.group_by(&:input_type)
    inputs
  end

  def hit_types
    object.hit_types.split(" ")
  end
end

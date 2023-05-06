class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :inputs

  has_many :characters
  has_many :inputs

  def inputs
  inputs = object.inputs.group_by(&:input_type)
  inputs
  end
end

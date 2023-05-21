class GameBookmarkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :hit_types

  # has_many :inputs

  # def inputs
  #   inputs = object.inputs.group_by(&:input_type)
  #   inputs
  # end

  def hit_types
    object.hit_types.split(" ")
  end
end
class GameBookmarkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :hit_types

  def hit_types
    object.hit_types.split(" ")
  end
end
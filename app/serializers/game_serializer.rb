class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug

  has_many :characters
end

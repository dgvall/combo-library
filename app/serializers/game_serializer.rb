class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url

  has_many :characters
end

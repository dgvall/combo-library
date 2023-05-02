class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :abbreviation

  has_many :characters
end

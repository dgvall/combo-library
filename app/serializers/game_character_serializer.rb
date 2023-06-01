class GameCharacterSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :slug
end
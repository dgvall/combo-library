class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :motions, :starters, :image_url, :name
end

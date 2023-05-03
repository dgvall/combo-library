class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :motions, :starters, :image_url, :name, :slug

  has_many :combos
end

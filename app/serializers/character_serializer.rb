class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :starters, :image_url, :name, :slug, :game_slug

  def starters
    object.starters.split("_")
  end

  def game_slug
    object.game.slug
  end
end

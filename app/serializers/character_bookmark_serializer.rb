class CharacterBookmarkSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :slug, :game_slug

  def game_slug
    object.game.slug
  end
end
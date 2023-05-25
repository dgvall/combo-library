class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bookmarks, :bookmarked_combo_ids

  def bookmarks
    object.bookmarked_combos.order(created_at: :desc).group_by(&:character).map do |character, combos|
      {
        character: serialize_characters(character),
        # combos: serialize_combos(combos),
        # game: serialize_game(character.game)
      }
    end
  end

  private

  def serialize_characters(character)
    CharacterBookmarkSerializer.new(character)
    # ActiveModelSerializers::SerializableResource.new(character, each_serializer: CharacterSerializer)
  end

  def serialize_combos(combos)
    ActiveModelSerializers::SerializableResource.new(combos, each_serializer: ComboSerializer)
  end

  def serialize_game(game)
    GameBookmarkSerializer.new(game)
    # ActiveModelSerializers::SerializableResource.new(game, each_serializer: GameSerializer)
  end
end

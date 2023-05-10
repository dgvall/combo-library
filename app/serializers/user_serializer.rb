class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :combo_ids, :bookmarks

  # has_many :bookmarked_combos

  def bookmarks
    object.bookmarked_combos.group_by(&:character).map do |character, combos|
      {
        character: character,
        combos: serialize_combos(combos)
      }
    end
  end

  private

  def serialize_combos(combos)
    ActiveModelSerializers::SerializableResource.new(combos, each_serializer: ComboSerializer)
  end
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :combo_ids, :bookmarks

  # has_many :bookmarked_combos

  def bookmarks
    object.bookmarked_combos.group_by(&:character)
  end

  
end

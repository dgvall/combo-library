class UserBookmark < ApplicationRecord
  belongs_to :user
  belongs_to :combo

  # Can't bookmark a combo multiple times
  validates :user_id, presence: true, uniqueness: {scope: :combo_id}
  validates :combo_id, presence: true

end

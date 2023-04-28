class Combo < ApplicationRecord
  belongs_to :character
  belongs_to :user
  
  has_many :user_bookmarks, dependent: :destroy
  has_many :bookmarked_users, through: :user_bookmarks, source: :users
end

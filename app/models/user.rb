class User < ApplicationRecord
  has_secure_password
  has_many :combos
  
  has_many :user_bookmarks
  has_many :bookmarked_combos, through: :users_bookmarks, source: :combos
end

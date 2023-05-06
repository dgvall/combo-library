class Combo < ApplicationRecord
  belongs_to :character
  belongs_to :user
  
  has_many :user_bookmarks, dependent: :destroy
  has_many :bookmarked_users, through: :user_bookmarks, source: :users

  validates :inputs, presence: true
  validates :youtube_id, presence: true
  validates :starter, presence: true
  validates :location, presence: true
  validates :hit_type, presence: true
  validates :meterless, presence: true
  validates :character_id, presence: true
  validates :user_id, presence: true
  validates :author_notes, length: { maximum: 300 }
end

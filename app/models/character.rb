class Character < ApplicationRecord
  belongs_to :game
  has_many :combos

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true
  validates :motions, presence: true
  validates :starters, presence: true
  validates :game_id, presence: true
end

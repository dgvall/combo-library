class Character < ApplicationRecord
  belongs_to :game
  has_many :combos

  validates :name, presence: true
  validates :image_path, presence: true
  validates :description, presence: true
  validates :motions, presence: true
  validates :game_id, presence: true
end

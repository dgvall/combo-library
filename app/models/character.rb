class Character < ApplicationRecord
  belongs_to :game
  has_many :combos

  # has_many :character_inputs
  # has_many :inputs, through: :character_inputs

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: { scope: :game_id }
  validates :image_url, presence: true, uniqueness: true
  validates :starters, presence: true
  validates :game_id, presence: true
end

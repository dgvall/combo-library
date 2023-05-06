class Game < ApplicationRecord
  has_many :characters

  has_many :game_inputs
  has_many :inputs, through: :game_inputs

  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true
  validates :hit_types, presence: true
end

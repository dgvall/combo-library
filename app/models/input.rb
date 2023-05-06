class Input < ApplicationRecord
  has_many :game_inputs
  has_many :games, through: :game_inputs

  has_many :character_inputs
  has_many :characters, through: :character_inputs

  validates :image_url, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true
  validates :input_type, presence: true
end

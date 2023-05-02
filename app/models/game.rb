class Game < ApplicationRecord
  has_many :characters

  validates :name, presence: true
  validates :image_url, presence: true
  validates :abbreviation, presence: true, uniqueness: true
end

class Game < ApplicationRecord
  has_many :characters

  validates :name, presence: true
  validates :image_url, presence: true
end

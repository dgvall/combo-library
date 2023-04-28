class Game < ApplicationRecord
  has_many :characters

  validates :name, presence: true
  validates :image_path, presence: true
end

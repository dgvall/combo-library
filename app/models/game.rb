class Game < ApplicationRecord
  has_many :characters

  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true
end

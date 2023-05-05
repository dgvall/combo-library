class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :motions, :starters, :image_url, :name, :slug

  belongs_to :game
    def starters
      object.starters.split(" ")
    end

    # def hit_types
    #   object.game
    # end

  has_many :combos
end

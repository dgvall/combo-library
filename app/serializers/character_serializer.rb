class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :starters, :image_url, :name, :slug, :inputs

  has_many :inputs

  belongs_to :game
    def starters
      object.starters.split(" ")
    end

    def inputs
      inputs = object.inputs.group_by(&:input_type)
      inputs
    end

  has_many :combos
end

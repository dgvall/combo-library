class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :starters, :image_url, :name, :slug, :inputs, :combos

  has_many :inputs
  has_many :combos
  # belongs_to :game

    def hello
      "hello"
    end
    def starters
      object.starters.split(" ")
    end

    def inputs
      inputs = object.inputs.group_by(&:input_type)
      inputs
    end
end

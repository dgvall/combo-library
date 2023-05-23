class CharacterBookmarkSerializer < ActiveModel::Serializer
  attributes :id, :starters, :image_url, :name, :slug

  # has_many :inputs
  # belongs_to :game

  # def combos
  #   object.combos.order(created_at: :desc)
  # end

  def starters
    object.starters.split("_")
  end

  # def inputs
  #   inputs = object.inputs.group_by(&:input_type)
  #   inputs
  # end
end
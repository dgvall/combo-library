class ComboSerializer < ActiveModel::Serializer
  attributes :id, :inputs, :youtube_id, :starter, :location, :hit_type, :meterless
end

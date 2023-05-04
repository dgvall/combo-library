class ComboSerializer < ActiveModel::Serializer
  attributes :id, :image_urls, :youtube_id, :starter, :location, :hit_type, :meterless

  def image_urls
    object.inputs.split(' ').map do |input|
      case input
      when '-'
        'https://i.imgur.com/SzG00rs.png'
      when 'S'
        'https://imgur.com/KtvFf0G'
      when '2'
        'https://imgur.com/KezFbHr'
      when 'H'
        'https://imgur.com/Ki3AR78'
      when '236'
        'https://imgur.com/FGoSIYq'
      end
    end
  end
end

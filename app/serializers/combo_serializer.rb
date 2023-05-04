class ComboSerializer < ActiveModel::Serializer
  attributes :id, :image_urls, :youtube_id, :starter, :location, :hit_type, :meterless

  def image_urls
    object.inputs.split(' ').map do |input|
      case input
      when '-'
        'https://i.imgur.com/IxEwf4u.png'
      when 'S'
        'https://i.imgur.com/KtvFf0G.png'
      when '2'
        'https://i.imgur.com/KezFbHr.png'
      when 'H'
        'https://i.imgur.com/Ki3AR78.png'
      when '236'
        'https://i.imgur.com/FGoSIYq.png'
      end
    end
  end
end

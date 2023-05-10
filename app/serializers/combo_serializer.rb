class ComboSerializer < ActiveModel::Serializer
  attributes :id, :image_urls, :youtube_id, :starter, :location, :hit_type, :meterless, :author_notes, :damage, :inputs, :user_id

  def image_urls
    object.inputs.split(' ').map do |input|
      case input
      when '-'
        'https://i.imgur.com/IxEwf4u.png'
      when 'P'
        'https://i.imgur.com/Dv8VQDw.png'
      when 'K'
        'https://i.imgur.com/8AKrxRf.png'
      when 'S'
        'https://i.imgur.com/KtvFf0G.png'
      when 'H'
        'https://i.imgur.com/Ki3AR78.png'
      when 'D'
        'https://i.imgur.com/iolwA1k.png'
      when 'RC'
        'https://i.imgur.com/ovXavcY.png'
      when 'Dash'
        'https://i.imgur.com/TuBfI2x.png'
      when '1'
        'https://i.imgur.com/Fby15hF.png'
      when '2'
        'https://i.imgur.com/KezFbHr.png'
      when '3'
        'https://i.imgur.com/06D3AyK.png'
      when '4'
        'https://i.imgur.com/HwKpXDr.png'
      when '5'
        'https://i.imgur.com/OfO6HKV.png'
      when '6'
        'https://i.imgur.com/gyfnDrv.png'
      when '7'
        'https://i.imgur.com/2rO9chH.png'
      when '8'
        'https://i.imgur.com/8fY51s7.png'
      when '9'
        'https://i.imgur.com/UqYEenq.png'
      when '214'
        'https://i.imgur.com/F0hNuQt.png'
      when '236'
        'https://i.imgur.com/FGoSIYq.png'
      when '421'
        'https://i.imgur.com/XUhyVUc.png'
      when '623'
        'https://i.imgur.com/YbO0z8X.png'
      when '248'
        'https://i.imgur.com/X6EeTeb.png'
      when '268'
        'https://i.imgur.com/CCdla7s.png'
      when '426'
        'https://i.imgur.com/eoQSkqs.png'
      when '624'
        'https://i.imgur.com/iocDwKJ.png'
      when '684'
        'https://i.imgur.com/4Iem06x.png'
      when '486'
        'https://i.imgur.com/oKZq3p4.png'
      when '842'
        'https://i.imgur.com/ogiRqdN.png'
      when '862'
        'https://i.imgur.com/7d2vQ51.png'
      when 'Circle'
        'https://i.imgur.com/SoCvJ4j.png'
      end
    end
  end
end

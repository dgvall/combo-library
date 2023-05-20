# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# ggst = Game.create!(
#   name: "Guilty Gear: Strive",
#   image_url: "https://i.imgur.com/ioPuJfQ.png",
#   slug: "ggst",
#   hit_types: "Normal Counter"
# )

# p = Input.create!(
#   input_type: "Button",
#   name: "P",
#   image_url: "https://i.imgur.com/Dv8VQDw.png"
# )

# k = Input.create!(
#   input_type: "Button",
#   name: "K",
#   image_url: "https://i.imgur.com/8AKrxRf.png"
# )

# s = Input.create!(
#   input_type: "Button",
#   name: "S",
#   image_url: "https://i.imgur.com/KtvFf0G.png"
# )

# h = Input.create!(
#   input_type: "Button",
#   name: "H",
#   image_url: "https://i.imgur.com/Ki3AR78.png"
# )

# d = Input.create!(
#   input_type: "Button",
#   name: "D",
#   image_url: "https://i.imgur.com/iolwA1k.png"
# )

# rc = Input.create!(
#   input_type: "Extra",
#   name: "RC",
#   image_url: "https://i.imgur.com/ovXavcY.png"
# )

# dash = Input.create!(
#   input_type: "Extra",
#   name: "Dash",
#   image_url: "https://i.imgur.com/TuBfI2x.png"
# )

# ggst.inputs << [p, k, s, h, d, dash, rc]

# i236 = Input.create!(
#   input_type: "Motion",
#   name: "236",
#   image_url: "https://i.imgur.com/FGoSIYq.png"
# )

# i214 = Input.create!(
#   input_type: "Motion",
#   name: "214",
#   image_url: "https://i.imgur.com/F0hNuQt.png"
# )

# i248 = Input.create!(
#   input_type: "Motion",
#   name: "248",
#   image_url: "https://i.imgur.com/X6EeTeb.png"
# )

# i268 = Input.create!(
#   input_type: "Motion",
#   name: "268",
#   image_url: "https://i.imgur.com/CCdla7s.png"
# )

# i421 = Input.create!(
#   input_type: "Motion",
#   name: "421",
#   image_url: "https://i.imgur.com/XUhyVUc.png"
# )

# i426 = Input.create!(
#   input_type: "Motion",
#   name: "426",
#   image_url: "https://i.imgur.com/eoQSkqs.png"
# )

# i486 = Input.create!(
#   input_type: "Motion",
#   name: "486",
#   image_url: "https://i.imgur.com/oKZq3p4.png"
# )

#   i623 = Input.create!(
#     input_type: "Motion",
#     name: "623",
#     image_url: "https://i.imgur.com/YbO0z8X.png"
#   )

# i624 = Input.create!(
#   input_type: "Motion",
#   name: "624",
#   image_url: "https://i.imgur.com/iocDwKJ.png"
# )

# i684 = Input.create!(
#   input_type: "Motion",
#   name: "684",
#   image_url: "https://i.imgur.com/4Iem06x.png"
# )

# i842 = Input.create!(
#   input_type: "Motion",
#   name: "842",
#   image_url: "https://i.imgur.com/ogiRqdN.png"
# )

# i862 = Input.create!(
#   input_type: "Motion",
#   name: "862",
#   image_url: "https://i.imgur.com/7d2vQ51.png"
# )

# circle = Input.create!(
#   input_type: "Motion",
#   name: "Circle",
#   image_url: "https://i.imgur.com/SoCvJ4j.png"
# )

# testament = Character.create!(
#   name: "Testament",
#   slug: "testament",
#   image_url: "https://i.imgur.com/YebETRP.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 236S 236H 214P 214S 214H 236236P 236236K",
#   game_id: 1
# )

# testament.inputs << [i236, i214]

# jacko = Character.create!(
#   name: "Jack-O'",
#   slug: "jacko",
#   image_url: "https://i.imgur.com/NrtJYac.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 236K 214K 214H 6246P",
#   game_id: 1
# )

# jacko.inputs << [i236, i214, i624]

# nago = Character.create!(
#   name: "Nagoriyuki",
#   slug: "nagoriyuki",
#   image_url: "https://i.imgur.com/Gbo1O4C.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6K 6H jP jK jS jH jD Throw jThrow 236S 214H 623H 623P 6246S",
#   game_id: 1
# )

# nago.inputs << [i236, i214, i623, i624]

# millia = Character.create!(
#   name: "Millia Rage",
#   slug: "millia",
#   image_url: "https://i.imgur.com/JKTa3P3.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6K 6H jP jK jS jH jD Throw jThrow 236S 236H j236P 214P 214S j236H 6246H 236236S",
#   game_id: 1
# )

# millia.inputs << [i236, i214, i624]

# chipp = Character.create!(
#   name: "Chipp Zanuff",
#   slug: "chipp",
#   image_url: "https://i.imgur.com/El1opwl.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6K 6H jP jK jS jH jD j2K Throw jThrow 236P 236K 623S 236H 236S 236K 624S 6246H 236236P",
#   game_id: 1
# )

# chipp.inputs << [i236, i623, i624]

# goldlewis = Character.create!(
#   name: "Goldlewis Dickinson",
#   slug: "goldlewis",
#   image_url: "https://i.imgur.com/7RMgeRI.png",
#   starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 426H 624H 268H 248H 684H 486H 842H 862H 236S 360H 720H 1080H 236236K",
#   game_id: 1
# )

# goldlewis.inputs << [i236, i426, i624, i268, i248, i684, i486, i842, i862, circle]

# sf6 = Game.create!(
#  name: "Street Fighter 6",
#  image_url: "https://i.imgur.com/8heu8Fj.png",
#  slug: "sf6",
#  hit_types: "Normal Punish-Counter Counter"
#  )

#  lp = Input.create!(
#   input_type: "Button",
#   name: "LP",
#   image_url: "https://i.imgur.com/aCCMFrY.png"
# )

# mp = Input.create!(
#   input_type: "Button",
#   name: "MP",
#   image_url: "https://i.imgur.com/ptI0QQ8.png"
# )

# hp = Input.create!(
#   input_type: "Button",
#   name: "HP",
#   image_url: "https://i.imgur.com/AREXTeF.png"
# )

# lk = Input.create!(
#   input_type: "Button",
#   name: "LK",
#   image_url: "https://i.imgur.com/Mc2G0nT.png"
# )

# mk = Input.create!(
#   input_type: "Button",
#   name: "MK",
#   image_url: "https://i.imgur.com/NHrJZfc.png"
# )

# hk = Input.create!(
#   input_type: "Button",
#   name: "HK",
#   image_url: "https://i.imgur.com/VuPrTtO.png"
# )

# di = Input.create!(
#   input_type: "Extra",
#   name: "DI",
#   image_url: "https://i.imgur.com/XxRoCbK.png"
# )

# sf6.inputs << [lp, mp, hp, lk, mk, hk, di]

#  luke = Character.create!(
#   name: "Luke",
#   slug: "luke",
#   image_url: "https://www.streetfighter.com/6/assets/images/character/luke/luke.png",
#   starters: "LP MP HP LK MK HK 2LP 2MP 2HP 2LK 2MK 2HK 6MP 236P 214P 214M 214H 236236K 236236P 214214P",
#   game_id: 2
#  )

#  luke.inputs << [i236, i214]

#  ryu = Character.create!(
#   name: "Ryu",
#   slug: "ryu",
#   image_url: "https://www.streetfighter.com/6/assets/images/character/ryu/ryu.png",
#   starters: "LP MP HP LK MK HK 2LP 2MP 2HP 2LK 2MK 2HK 6MP 236P 214P 214M 214H 236236K 236236P 214214P",
#   game_id: 2
#  )

#  ryu.inputs << [i236, i214]

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ggst = Game.create!(
 name: "Guilty Gear: Strive",
 image_url: "https://i.imgur.com/ioPuJfQ.png",
 slug: "ggst",
 hit_types: "Normal Counter"
 )

p = Input.create!(
input_type: "Button",
name: "P",
image_url: "https://i.imgur.com/Dv8VQDw.png"
)

k = Input.create!(
input_type: "Button",
name: "K",
image_url: "https://i.imgur.com/8AKrxRf.png"
)

s = Input.create!(
  input_type: "Button",
  name: "S",
  image_url: "https://i.imgur.com/KtvFf0G.png"
)

h = Input.create!(
  input_type: "Button",
  name: "H",
  image_url: "https://i.imgur.com/Ki3AR78.png"
)

d = Input.create!(
input_type: "Button",
name: "D",
image_url: "https://i.imgur.com/iolwA1k.png"
)

rc = Input.create!(
input_type: "Extra",
name: "RC",
image_url: "https://i.imgur.com/ovXavcY.png"
)

dash = Input.create!(
  input_type: "Extra",
  name: "Dash",
  image_url: "https://i.imgur.com/TuBfI2x.png"
)

ggst.inputs << [p, k, s, h, d, dash, rc]

i268 = Input.create!(
  input_type: "Motion",
  name: "236",
  image_url: "https://i.imgur.com/FGoSIYq.png"
)

i248 = Input.create!(
input_type: "Motion",
name: "214",
image_url: "https://i.imgur.com/F0hNuQt.png"
)

i248 = Input.create!(
  input_type: "Motion",
  name: "248",
  image_url: "https://i.imgur.com/X6EeTeb.png"
  )

  i268 = Input.create!(
input_type: "Motion",
name: "268",
image_url: "https://i.imgur.com/CCdla7s.png"
  )

  i421 = Input.create!(
input_type: "Motion",
name: "421",
image_url: "https://i.imgur.com/XUhyVUc.png"
  )

  i426 = Input.create!(
input_type: "Motion",
name: "426",
image_url: "https://i.imgur.com/eoQSkqs.png"
  )

  i486 = Input.create!(
input_type: "Motion",
name: "486",
image_url: "https://i.imgur.com/oKZq3p4.png"
  )

  i623 = Input.create!(
input_type: "Motion",
name: "623",
image_url: "https://i.imgur.com/YbO0z8X.png"
  )

  i624 = Input.create!(
input_type: "Motion",
name: "624",
image_url: "https://i.imgur.com/iocDwKJ.png"
  )

  i684 = Input.create!(
input_type: "Motion",
name: "684",
image_url: "https://i.imgur.com/4Iem06x.png"
)

i842 = Input.create!(
input_type: "Motion",
name: "842",
image_url: "https://i.imgur.com/ogiRqdN.png"
)

i862 = Input.create!(
input_type: "Motion",
name: "862",
image_url: "https://i.imgur.com/7d2vQ51.png"
)

circle = Input.create!(
input_type: "Motion",
name: "Circle",
image_url: "https://i.imgur.com/SoCvJ4j.png"
)

testament = Character.create!(
 name: "Testament",
 slug: "testament",
 image_url: "https://i.imgur.com/YebETRP.png",
 starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 236S 236H 214P 214S 214H 236236P 236236K",
 game_id: 1
 )

testament.inputs << [i236, i214, i248, i268, i684, i486, i624, i426, i862, i842, circle]

# Combo.create!(
#   inputs: "S - 2 S - H - 236 H",
#   youtube_id: "dQw4w9WgXcQ",
#   starter: "cS",
#   location: "Midscreen",
#   damage: 300,
#   hit_type: "Normal",
#   meterless: false,
#   author_notes: "Very easy",
#   character_id: 1,
#   user_id: 1
# )

# Combo.create!(
# inputs: "2 S - 2 H - 236 S",
# youtube_id: "KHiWsEckmEw",
# starter: "2S",
# location: "Midscreen",
# damage: 315,
# hit_type: "Normal",
# meterless: true,
# author_notes: "Very hard",
# character_id: 1,
# user_id: 1
# )

# Game.create!(
#  name: "Street Fighter 6",
#  image_url: "https://static.wikia.nocookie.net/streetfighter/images/4/47/Street_fighter_6_logo.png/revision/latest?cb=20220603151920",
#  slug: "sf6"
#  )

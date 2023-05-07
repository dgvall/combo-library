# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.create!(
 name: "Guilty Gear: Strive",
 image_url: "https://i.imgur.com/ioPuJfQ.png",
 slug: "ggst",
 hit_types: "Normal Counter"
 )

Character.create!(
 name: "Testament",
 slug: "testament",
 image_url: "https://i.imgur.com/YebETRP.png",
 starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 236S 236H 214P 214S 214H 236236P 236236K",
 game_id: 1
 )

Combo.create!(
  inputs: "S - 2 S - H - 236 H",
  youtube_id: "dQw4w9WgXcQ",
  starter: "cS",
  location: "Midscreen",
  damage: 300,
  hit_type: "Normal",
  meterless: false,
  author_notes: "Very easy",
  character_id: 1,
  user_id: 1
)

Combo.create!(
inputs: "2 S - 2 H - 236 S",
youtube_id: "KHiWsEckmEw",
starter: "2S",
location: "Midscreen",
damage: 315,
hit_type: "Normal",
meterless: true,
author_notes: "Very hard",
character_id: 1,
user_id: 1
)

Input.create!(
  input_type: "Normal",
  name: "S",
  image_url: "https://i.imgur.com/KtvFf0G.png"
)

Input.create!(
  input_type: "Normal",
  name: "H",
  image_url: "https://i.imgur.com/Ki3AR78.png"
)

Input.create!(
  input_type: "Extra",
  name: "Dash",
  image_url: "https://i.imgur.com/TuBfI2x.png"
)

GameInput.create!(
  game_id: 1,
  input_id: 1
)

GameInput.create!(
  game_id: 1,
  input_id: 2
)

GameInput.create!(
  game_id: 1,
  input_id: 3
)

Input.create!(
  input_type: "Motion",
  name: "236",
  image_url: "https://i.imgur.com/FGoSIYq.png"
)

CharacterInput.create!(
  character_id: 1,
  input_id: 4
)

# Game.create!(
#  name: "Street Fighter 6",
#  image_url: "https://static.wikia.nocookie.net/streetfighter/images/4/47/Street_fighter_6_logo.png/revision/latest?cb=20220603151920",
#  slug: "sf6"
#  )

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.create!(name: "Guilty Gear: Strive",
 image_url: "https://i.imgur.com/ioPuJfQ.png")

Character.create!(name: "Testament",
 image_url: "https://i.imgur.com/YebETRP.png",
 motions: "236 214",
 starters: "5P 5K cS fS 5H 5D 2P 2K 2S 2H 2D 6P 6H jP jK jS jH jD Throw jThrow 236S 236H 214P 214S 214H 236236P 236236K",
 game_id: 1
 )

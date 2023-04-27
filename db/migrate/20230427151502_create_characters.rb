class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image_path
      t.string :description
      t.string :normals
      t.string :specials
      t.string :supers
      t.integer :game_id
      t.timestamps
    end
  end
end

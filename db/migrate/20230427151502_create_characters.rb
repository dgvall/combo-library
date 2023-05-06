class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :slug
      t.string :image_url
      t.string :starters
      t.integer :game_id
      t.timestamps
    end
  end
end

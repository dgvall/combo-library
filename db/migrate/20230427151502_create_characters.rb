class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image_url
      t.string :motions
      t.string :starters
      t.integer :game_id
      t.timestamps
    end
  end
end

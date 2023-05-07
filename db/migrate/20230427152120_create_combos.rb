class CreateCombos < ActiveRecord::Migration[6.1]
  def change
    create_table :combos do |t|
      t.string :inputs
      t.string :youtube_id
      t.string :starter
      t.string :location
      t.string :hit_type
      t.boolean :meterless
      t.integer :damage
      t.string :author_notes
      t.integer :character_id
      t.integer :user_id
      t.timestamps
    end
  end
end

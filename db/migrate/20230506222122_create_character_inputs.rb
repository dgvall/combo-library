class CreateCharacterInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :character_inputs do |t|
      t.integer :character_id
      t.integer :input_id
      t.timestamps
    end
  end
end

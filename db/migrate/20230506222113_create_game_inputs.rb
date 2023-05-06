class CreateGameInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :game_inputs do |t|
      t.integer :game_id
      t.integer :input_id
      t.timestamps
    end
  end
end

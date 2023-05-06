class CreateInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :inputs do |t|
      t.string :name
      t.string :image_url
      t.string :input_type
      t.timestamps
    end
  end
end

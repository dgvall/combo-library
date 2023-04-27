class CreateUserBookmarks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_bookmarks do |t|
      t.integer :user_id
      t.integer :combo_id
      t.timestamps
    end
  end
end

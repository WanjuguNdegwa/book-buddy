class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.string :image_url
      t.text :description

      t.timestamps
    end
  end
end

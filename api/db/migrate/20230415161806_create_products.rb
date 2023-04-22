class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :price
      t.string :image_url
      t.string :category
      t.belongs_to :user

      t.timestamps
    end
  end
end

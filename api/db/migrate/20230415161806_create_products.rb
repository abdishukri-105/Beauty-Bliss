class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :price
      t.string :image_url
<<<<<<< HEAD
      t.string :category
      t.integer :user_id
      t.integer ;qty 
=======
>>>>>>> b40a2402cdfda7fdc25e26c70539b25f3eea0ef5

      t.timestamps
    end
  end
end

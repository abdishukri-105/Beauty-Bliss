class AddQtyToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :qty, :integer
  end
end

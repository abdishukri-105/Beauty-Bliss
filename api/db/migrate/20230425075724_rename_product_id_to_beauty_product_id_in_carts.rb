class RenameProductIdToBeautyProductIdInCarts < ActiveRecord::Migration[7.0]
  def change
    rename_column :carts, :product_id, :beauty_product_id
  end
end

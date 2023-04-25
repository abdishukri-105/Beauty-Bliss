class ChangeUserToCustomerInCarts < ActiveRecord::Migration[7.0]
  def change
    # rename_column :carts, :user_id, :customer_id
    rename_index :carts, 'index_carts_on_user_id', 'index_carts_on_customer_id'
    # add_index :carts, :customer_id, name: "index_carts_on_customer_id"
  end
end




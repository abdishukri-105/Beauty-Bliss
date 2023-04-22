class CartsController < ApplicationController

def create
  product = Product.find_by(id: params[:product])
  if product.nil?
    return app_response(status_code: 404, message: "Product not found")
  elsif product.quantity < 1
    return app_response(status_code: 400, message: "Product out of stock")
  elsif product.quantity < params[:quantity].to_i
    return app_response(status_code: 400, message: "Quantity requested exceeds available stock")
  end

  user = User.find_by(uid: uid)
  if user.nil?
    return app_response(status_code: 401, message: "Unauthorized")
  end

  cart = user.carts.create(
    product_id: product.id,
    quantity: params[:quantity].to_i,
    active: true
  )

  if cart.persisted?
    return app_response(status_code: 201, body: cart, serializer: CartSerializer)
  else
    return app_response(status_code: 500, message: "Unable to add product to cart")
  end
end


    def update_cart
    end

    def delete_from_cart
       Cart.destroy_by(id: params[:id])
       app_response(message: "Deleted item from cart") 
    end

    def clear_cart
        Cart.destroy_by(id: params[:id])
        app_response(message: "You have cleared your cart")
    end

    # Retrieve cart items for the user
    def show_cart
       cart_items = User.find(uid).carts.filter {|item| item.active}.map { |item| ActiveModelSerializers::SerializableResource.new(item, serializer: CartSerializer) }
       app_response(body: cart_items)
    end

    private

    def out_of_stock
        app_response(message: "The item is out of stock at this time")
    end

    def limited_stock(product, quantity)
        app_response(message: "Failed to order #{quantity} product(s). There are only #{product.quantity} in stock")
    end

    def invalid_product
        not_found(message: "That does not seem to be a valid product")
    end
end

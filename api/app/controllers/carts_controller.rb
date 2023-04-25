 class CartsController < ApplicationController
   
  def create
    product = BeautyProduct.find(params[:id])
    quantity = params[:quantity] || 1
    cart_item = CartItem.new(product: product, quantity: quantity)
    if cart_item.save
      render json: { message: "Item added to cart" }, status: :created
    else
      render json: { errors: cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    cart_items = CartItem.all
    render json: cart_items
  end

  def destroy
    cart_item = CartItem.find(params[:id])
    cart_item.destroy
    head :no_content
  end
 end

















 
#       def add_to_cart
#         beauty_product = BeautyProduct.find(params[:shoe])
#         if beauty_product
#             if beauty_product.qty < 1
                
#             else
#                 if shoe.qty < params[:qty].to_i
#                     limited_stock(shoe, params[:qty])
#                 else
#                     user = User.find(uid)
#                     if user.valid?
#                         cart = user.carts.create(
#                         shoe_id: shoe.id,
#                         qty: params[:qty],
#                         active: true
#                         )
#                         return app_response(status_code: 201, body: cart, serializer: CartSerializer)
#                     else
#                         return app_response(message:"You are not authorized!", status_code: 401)
#                     end
#                 end
#             end
#             else
#                 invalid_shoe
#         end
#     end

#     def update_cart
#     end

#     def delete_from_cart
#       Cart.destroy_by(id: params[:cart_id])
#       app_response(message: "Deleted item from cart") 
#     end

#     def clear_cart
#         Cart.destroy_by(user_id: uid)
#         app_response(message: "You have cleared your cart")
#     end

#     # Retrieve cart items for the user
#     def show_cart
#       cart_items = User.find(uid).carts.filter {|item| item.active}.map { |item| ActiveModelSerializers::SerializableResource.new(item, serializer: CartSerializer) }
#       app_response(body: cart_items)
#     end

#     private

#     def out_of_stock
#         app_response(message: "The item is out of stock at this time")
#     end

#     def limited_stock(shoe, qty)
#         app_response(message: "Failed to order #{qty} shoe(s). There are only #{shoe.qty} in stock")
#     end

#     def invalid_shoe
#         not_found(message: "That does not seem to be a valid shoe")
#     end
#  end


























#     def index
#       @cart = Cart.all
#       # render json: @cart, include: :beauty_product
#       render json: @cart, include: :beauty_product 
#       # , each_serializer: CartSerializer, include: 'beauty_product'
#     end

#   def add_to_cart
#     beauty_product = BeautyProduct.find_by(id: params[:beauty_product])
#     if beauty_product.nil?
#       return app_response(status_code: 404, message: "Product not found")
#     elsif beauty_product.qty < 1
#       return app_response(status_code: 400, message: "Product out of stock")
#     elsif beauty_product.qty < params[:qty].to_i
#       return app_response(status_code: 400, message: "Quantity requested exceeds available stock")
#     end
  

#   # user = User.find_by(uid: uid)
#   #    if user.nil?
#   #     return app_response(status_code: 401, message: "Unauthorized")
#   #   end

#     cart = Cart.create(
#       beauty_product_id: beauty_product.id,
#       qty: params[:qty].to_i,
#       active: true
#     )

#     if cart.persisted?
#       return app_response(status_code: 201, body: cart, serializer: CartSerializer)
#     else
#       return app_response(status_code: 500, message: "Unable to add product to cart")
#     end

#   end

#   private

#       def out_of_stock
#           app_response(message: "The item is out of stock at this time")
#       end
  
#       def limited_stock(beauty_product, qty)
#           app_response(message: "Failed to order #{qty} product(s). There are only #{beauty_product.qty} in stock")
#       end
  
#       def invalid_product
#           not_found(message: "That does not seem to be a valid product")
#       end
  

# end

# #   def create
# #     @cart = Cart.new(cart_params)

# #     if @cart.save
# #       render json: @cart, status: :created
# #     else
# #       render json: @cart.errors, status: :unprocessable_entity
# #     end
# #   end

# #   private

# #   def cart_params
# #     params.require(:cart).permit(:beauty_product_id, :quantity)
# #   end

# # end

# #   before_action :set_cart, only: %i[ show update destroy ]

# #    # GET /beauty_products
# #    def index
# #     carts = Cart.all
# #     render json: carts
# #    end

# #   # GET /beauty_products/1
# #   def show
# #     render json: cart 
# #   end

# #   # POST /beauty_products
# #   def create
# #     cart = Cart.new(cart_params)

# #     if cart.save
# #       render json: cart, status: :created, location: cart
# #     else
# #       render json: cart.errors, status: :unprocessable_entity
# #     end
# #   end

# #   # PATCH/PUT /beauty_products/1
# #   def update
# #     if cart.update(cart_params)
# #       render json: cart
# #     else
# #       render json: cart.errors, status: :unprocessable_entity
# #     end
# #   end

# #   # DELETE /beauty_products/1
# #   def destroy
# #     cart.destroy
# #   end

# #   private

# #     # Use callbacks to share common setup or constraints between actions.
# #     def set_cart
# #       cart = Cart.find(params[:id])
# #     end

# #     # Only allow a list of trusted parameters through.
# #     def cart_params
# #       params.require(:cart).permit(:quantity, :product_id)
# #     end


# # end




# # def add_to_cart
# #   product = Product.find_by(id: params[:product])
# #   if product.nil?
# #     return app_response(status_code: 404, message: "Product not found")
# #   elsif product.quantity < 1
# #     return app_response(status_code: 400, message: "Product out of stock")
# #   elsif product.quantity < params[:quantity].to_i
# #     return app_response(status_code: 400, message: "Quantity requested exceeds available stock")
# #   end

# #   user = User.find_by(uid: uid)
# #   if user.nil?
# #     return app_response(status_code: 401, message: "Unauthorized")
# #   end

# #   cart = user.carts.create(
# #     product_id: product.id,
# #     quantity: params[:quantity].to_i,
# #     active: true
# #   )

# #   if cart.persisted?
# #     return app_response(status_code: 201, body: cart, serializer: CartSerializer)
# #   else
# #     return app_response(status_code: 500, message: "Unable to add product to cart")
# #   end

# #  end


# #     def update_cart
# #     end

# #     def delete_from_cart
# #        Cart.destroy_by(id: params[:id])
# #        app_response(message: "Deleted item from cart") 
# #     end

# #     def clear_cart
# #         Cart.destroy_by(id: params[:id])
# #         app_response(message: "You have cleared your cart")
# #     end

# #     # Retrieve cart items for the user
# #     def show_cart
# #        cart_items = User.find(uid).carts.filter {|item| item.active}.map { |item| ActiveModelSerializers::SerializableResource.new(item, serializer: CartSerializer) }
# #        app_response(body: cart_items)
# #     end

# #     private

# #     def out_of_stock
# #         app_response(message: "The item is out of stock at this time")
# #     end

# #     def limited_stock(product, quantity)
# #         app_response(message: "Failed to order #{quantity} product(s). There are only #{product.quantity} in stock")
# #     end

# #     def invalid_product
# #         not_found(message: "That does not seem to be a valid product")
# #     end


# # end

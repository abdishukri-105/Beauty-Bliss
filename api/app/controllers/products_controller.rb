class ProductsController < ApplicationController

    def index 
        products = Product.all
        render json: products
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
        render json: product
        else 
            render json: {error: "Product not found"}, status: 404
        end
    end

    def create
        # user = User.find(session[:user_id])
        # app_response(status_code: 401, message: "You do not have permission to add a product to the store") unless user.valid?
        product = Product.create(product_params)
        render json: product
        # app_response(status_code: 201, message: "Created successfully", body: product, serializer: ProductSerializer)
    end

    def update
        product = Product.find(params[:id])
        product_not_found unless product.valid?
             product.update(product_params)
             app_response(status_code: 200, message: "Updated successfully", body: product, serializer: ProductSerializer)
     end

    def destroy
        product = Product.find_by(id: params[:id])
        product.destroy
        app_response(message: "Deleted successfully")
    end

 

    private

    def product_params
        params.permit(:name, :description, :price, :image_url, :category)
    end

    def product_not_found
        not_found(message: "That does not seem to be a valid product.")
    end

end
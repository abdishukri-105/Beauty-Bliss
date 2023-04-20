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
        product = Product.find_by(id: params[:id])
        product.create(product_params)
        app_response(status: 201, message: "Created successfully")
    end

    def update
        product = Product.find_by(id: params[:id])
        product_not_found unless product.valid?
        product.update(product_params)
        app_response(status: 200, message: "Updated successfully")
    end
end

    private

    def product_params
        params.permit(:name, :description, :price, :image_url)
    end

    def product_not_found
        not_found(message: "That does not seem to be a valid product.")
    end
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

    end
end

    private

    # def product_params
    #     params.permit(:name, :description, :price, :image_url)
    # end

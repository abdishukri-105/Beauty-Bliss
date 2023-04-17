class ProductsController < ApplicationController
    wrap_parameters format: []

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    products = Product.all
    render json: products.as_json(only: [:id, :name, :description, :price, :image_url ])
  end

  def show 
    product = find_product
    render json: product.as_json
  end

  private

  def find_product
    Product.find_by(id: params[:id]) || raise(ActiveRecord::RecordNotFound)
  end

  def render_not_found_response
    render json: { error: "Product not found" }, status: :not_found 
  end



end

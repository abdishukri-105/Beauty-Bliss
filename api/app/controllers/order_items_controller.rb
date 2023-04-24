class OrderItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    def create
      @order_item = OrderItem.new(order_item_params)
    
      if @order_item.save
        render json: @order_item.as_json, status: :created
      else
        render json: { errors: @order_item.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      order_item = find_order_item
      render_not_found_response unless order_item.valid?
      order_item.update(order_item_params)
      render json: order_item.as_json, status: :ok
    end
  
    def destroy
      order_item = find_order_item
      order_item.destroy
      head :no_content
    end
  
    private
  
    def find_order_item
      OrderItem.find_by(id: params[:id]) || raise(ActiveRecord::RecordNotFound)
    end
  
    def render_not_found_response
      render json: { error: "Order item not found" }, status: :not_found 
    end
  
    def order_item_params
      params.permit(:quantity, :product_id, :order_id)
    end
  end
  

class OrdersController < ApplicationController
      before_action :authorize_user, only: [:show]
      before_action :authenticate_user!, except: [:index, :show]
  
    def index
      orders = current_user.orders
      render json: orders.as_json(include: :order_items)
    end
  
    def show
      order = find_order
      render json: order.as_json(include: :order_items)
    end
  
    def create
      order = current_user.orders.build(order_params)
      if order.save
        render json: order.as_json, status: :created
      else
        render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
      end
      # Rails.logger.debug("current_user: #{current_user.inspect}")
    end
  
    def update
      order = find_order
      if order.update(order_params)
        render json: order.as_json, status: :ok
      else
        render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def checkout
      order = find_order
      order.update(status: 'paid')
      render json: order.as_json, status: :ok
    end
  
    private
  
    def find_order
      Order.find_by(id: params[:id], user_id: current_user.id) || raise(ActiveRecord::RecordNotFound)
    end
  
    def order_params
      params.require(:order).permit(:status, order_items_attributes: [:product_id, :quantity])
    end
  
    def authorize_user
      order = find_order
      unless current_user == order.user
        render json: { error: "You are not authorized to access this resource" }, status: :unauthorized
      end
    end
  
  end
  

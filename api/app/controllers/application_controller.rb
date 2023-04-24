class ApplicationController < ActionController::API
include ActionController::Cookies
  # before_action :authenticate_user!

    # protect_from_forgery with: :exception

    # def is_admin?
    #   current_user && current_user.admin?
    # end


  private

  def authenticate_user!
    unless current_user
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
  
end


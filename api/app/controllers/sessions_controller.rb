class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.delete :user_id
        app_response(status_code: 200, message: "Log out successfully")
      end

end

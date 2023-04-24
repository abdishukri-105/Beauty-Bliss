class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

     # GET 
    def index
        render json: User.all, status: :ok
    end
    def show
        user = find_user
        render json: user
    end

    # PATCH
    def update
        user = find_user
        if user.valid?
            user.update(user_params)
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # POST
    def create
        user = User.create!(user_params)
        if user.valid?
          render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
   # DELETE
   def destroy
    user = User.find_by(id:params[:id])
   if user
       user.destroy
       head :no_content
  
   else
       render json: {error: 'User not found'}, status: not_found
   end
   end


    private
    def user_params
        params.permit(:username, :email, :password)
    end
    def find_user
        User.find(params[:id])
    end
    def record_not_found_response(exception)
        render json: { error: "User not found" }, status: :not_found
    end
end

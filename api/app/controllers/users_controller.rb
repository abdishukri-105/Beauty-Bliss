class UsersController < ApplicationController
    before_action :session_expired?, only: [:check_login_status]

    def register
        user = User.create(user_params)
        if user.valid?
            save_user(user.id)
            app_response(message: 'Registration was successful', status: :created, data: user)
        else
            app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
        end
    end


    def login
        sql = "username = :username OR email = :email"
        user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
        if user&.authenticate(user_params[:password])
            save_user(user.id)
            token = encode(user.id, user.email)
            app_response(message: 'Login was successful', status: :ok, data: {user: user, token: token})
        else
            app_response(message: 'Invalid username/email or password', status: :unauthorized)
        end
    end

    
    def logout
        remove_user
        app_response(message: 'Logout successful')
    end

      private
      def user_params
        params.permit(:username, :email, :password)
        # params.permit(:username, :email, :password)
        # params.require(:user).permit( :password,  :username,  :email)
      end
end















 












# class UsersController < ApplicationController

#     rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

#      # GET 
#     def index
#         render json: User.all, status: :ok
#     end
#     def show
#         user = find_user
#         render json: user
#     end

#     # PATCH
#     def update
#         user = find_user
#         if user.valid?
#             user.update(user_params)
#             render json: user
#         else
#             render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#         end
#     end

#     # POST
#     def create
#         user = User.create!(user_params)
#         if user.valid?
#           render json: user, status: :created
#         else
#             render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#         end
#     end
#    # DELETE
#    def destroy
#     user = User.find_by(id:params[:id])
#    if user
#        user.destroy
#        head :no_content
  
#    else
#        render json: {error: 'User not found'}, status: not_found
#    end
#    end


#     private
#     def user_params
#         params.permit(:username, :email, :password)
#     end
#     def find_user
#         User.find(params[:id])
#     end
#     def record_not_found_response(exception)
#         render json: { error: "User not found" }, status: :not_found
#     end

# end

class UsersController < ApplicationController
    skip_before_action :is_authorized, only: [:create, :login, :index]

    def user_profile
        render json: @user
    end

    def index
        @users = User.all

        render json: @users
    end

    def create
        @user = User.create(user_params)

        render json: @user, status: :created
    end

    def login
        @user = User.find_by(username: params[:user][:username])

        if @user && @user.authenticate(params[:user][:password])
          @token = JWT.encode({user_id: @user.id}, ENV['SECRET_KEY_BASE'])
    
          render json: {user_id: @user.id, username: @user.username, token: @token}
        else
          render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name)
    end

end




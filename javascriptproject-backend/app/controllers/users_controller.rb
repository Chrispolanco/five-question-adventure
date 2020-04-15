class UsersController < ApplicationController

    def new 
        @user = User.new 
        render json: UserSerializer.new(@user).to_serialized_json, status: 200 
    end 
    
    def show 
        @user = User.find(params[:id])
        render json: UserSerializer.new(@user).to_serialized_json, status: 200 
    end 

    def create 
        @user = User.create(user_params) 
        render json: UserSerializer.new(@user).to_serialized_json, status: 200 
    end 

    def update 
        @user = User.find(params[:id])
        if @user.update(user_params) 
            render json: UserSerializer.new(@user).to_serialized_json, status: 200
        else 
            render json: {status: 500}
        end 
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :name, :password)
    end

end

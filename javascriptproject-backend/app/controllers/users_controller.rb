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
        if @user && @user.save 
            session[:user_id] = @user.id 
            render json: UserSerializer.new(@user).to_serialized_json, status: 200 
        else 
            render json: { status: 400}
        end 
    end 

    def update 
        @user = User.find(params[:id])
        if @user.update(user_params) 
        render json: UserSerializer.new(@user).to_serialized_json, status: 200
        else 
            render json: {status: 400}
        end 
    end 

    def destroy 
        User.find(params[:id]).destroy
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :name, :password, :won_adventure_1, :won_adventure_2, :won_adventure_3, :won_adventure_4)
    end

end

class SessionsController < ApplicationController

    def new
        user = User.new 
        render json: UserSerializer.new(user).to_serialized_json
    end 

    def create 
        @user = User.find_by(username: params[:session][:username]) 
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id 
            render json: UserSerializer.new(user).to_serialized_json
        end 
    end 

    def destroy 
        session.clear 
    end 

end
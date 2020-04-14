class SessionsController < ApplicationController 

    def logged_in 
        if logged_in? 
          render 'adventures/index'
        else 
            redirect_to login_path 
    end 

    def new 
        @user = User.new 
    end 

    def create 
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id 
            redirect_to user_path(@user)
        else 
            flash[:error] = "Login not sucessful" 
            redirect_to login_path 
        end 
    end

    def destroy 
        session.clear 
        redirect_to login_path
    end 

end 
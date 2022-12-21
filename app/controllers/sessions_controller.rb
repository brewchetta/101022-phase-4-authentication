class SessionsController < ApplicationController

    # username
    # password

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: "Username or password invalid" }, status: 403
        end
    end

    def destroy

    end

end

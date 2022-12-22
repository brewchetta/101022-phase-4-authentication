class TrashcansController < ApplicationController
    skip_before_action :check_user, only: [:index, :show]

    def index
        render json: Trashcan.all
    end

    def show
        trashcan = Trashcan.find(params[:id])
        render json: trashcan
    end

    def create
        trashcan = current_user.trashcans.create!(trashcan_params)
        render json: trashcan, status: 201
    end

    def update
        trashcan = current_user.trashcans.find(params[:id])
        trashcan.update!(trashcan_params)
        render json: trashcan, status: :accepted
    end

    def destroy
        trashcan = current_user.trashcans.find(params[:id])
        trashcan.destroy
        render json: { message: "smelly garbage is gone" }
    end

    private

    def trashcan_params
        params.permit(:location)
    end

end

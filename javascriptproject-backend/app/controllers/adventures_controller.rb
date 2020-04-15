class AdventuresController < ApplicationController

    def index 
        @adventures = Adventure.all 
        render json: AdventureSerializer.new(@adventures).to_serialized_json, status: 200
    end 

    def show 
        @adventure = Adventure.find(params[:id])
        render json: AdventureSerializer.new(@adventure).to_serialized_json, status: 200 
    end 

    def update 
        @adventure = Adventure.find(params[:id]) 
        if @adventure.update(adventure_params) 
            render json: Adventure.new(@adventure).to_serialized_json, status: 200
        else 
            render json: {status:500}
        end 
    end 

    private 

        def adventure_params
            params.require(:adventure).permit(:won)
        end 

end

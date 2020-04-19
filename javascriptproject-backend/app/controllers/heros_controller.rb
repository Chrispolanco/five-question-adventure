class HerosController < ApplicationController
    
    def index
        @heros = Hero.all 
        render json: HeroSerializer.new(@heros).to_serialized_json, status: 200
    end 

end

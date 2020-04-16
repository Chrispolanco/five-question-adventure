class HeroesController < ApplicationController
    
    def index
        @heroes = Hero.all 
        render json: HeroSerializer.new(@heroes).to_serialized_json, status: 200
    end 

end

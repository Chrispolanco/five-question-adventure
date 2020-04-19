class HerosController < ApplicationController
    
    def index
        @heros = Hero.all 
        #render json: HeroSerializer.new(@heros).to_serialized_json, status: 200
    end 

    def new 
        @hero = Hero.new 
        #render json: HeroSerializer.new(@hero).to_serialized_json, status: 200 
    end 
    
    def show 
        @hero = Hero.find(params[:id])
        #render json: HeroSerializer.new(@hero).to_serialized_json, status: 200 
    end 

    def create 
        @hero = Hero.create(hero_params) 
        #render json: HeroSerializer.new(@hero).to_serialized_json, status: 200 
    end 

    def update 
        @hero = Hero.find(params[:id])
        if @hero.update(hero_params) 
            #render json: HeroSerializer.new(@hero).to_serialized_json, status: 200
        else 
            #render json: {status: 500}
        end 
    end 

    private

        def hero_params
            params.require(:hero).permit(:name, :character_class, :health)
        end

end

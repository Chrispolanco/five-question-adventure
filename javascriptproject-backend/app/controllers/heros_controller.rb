class HerosController < ApplicationController
    
    def new 
        hero = Hero.new 
        render json: HeroSerializer.new(hero).to_serialized_json
    end 

    def index
        heros = Hero.all 
        render json: HeroSerializer.new(heros).to_serialized_json
    end 
    
    def show 
        hero = Hero.find(params[:id])
        render json: HeroSerializer.new(hero).to_serialized_json
    end 

    def create 
        hero = Hero.create(hero_params) 
        render json: HeroSerializer.new(hero).to_serialized_json
    end 

    def update 
        hero = Hero.find(params[:id])
        if hero.update(hero_params) 
            render json: HeroSerializer.new(hero).to_serialized_json
        end 
    end 

    private

        def hero_params
            params.require(:hero).permit(:name, :character_class, :health, :age, :id)
        end

end

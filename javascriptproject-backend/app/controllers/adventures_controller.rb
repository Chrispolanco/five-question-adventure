class AdventuresController < ApplicationController

    def new 
        @adventure = Adventure.new 
        #render json: AdventureSerializer.new(@adventure).to_serialized_json, status: 200 
    end 

    def show 
        @adventure = Adventure.find(params[:id])
        render json: AdventureSerializer.new(@adventure).to_serialized_json, status: 200 
    end 

    def create 
        @adventure = Adventure.create(adventure_params) 
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

    def index 
        @adventures = Adventure.all 

    end 

    private 

        def adventure_params
            params.require(:adventure).permit(:adventure_number, :story, :questions_1, :questions_2, :questions_3, :questions_4, :questions_5, :answer_1, :answer_2, :answer_3, :answer_4, :answer_5,
                :background_image_questions_1_to_4, :background_music_1_4, :background_image_question_5, :background_music_5, :background_image_won, 
                :background_music_won, :background_image_loss, :background_music_loss, :background_image_incorrect, :background_music_incorrect, :phrase_incorrect, 
                :background_image_correct, :background_music_correct, :phrase_correct, :won, :user_id, :hero_id)
        end 

end

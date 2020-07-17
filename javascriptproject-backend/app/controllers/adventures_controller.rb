class AdventuresController < ApplicationController

    def new 
        @adventure = Adventure.new 
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def show 
        @adventure = Adventure.find(params[:id])
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def create 
        @adventure = Adventure.create(adventure_params) 
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def update 
        @adventure = Adventure.find(params[:id]) 
        if @adventure.update(adventure_params) 
            render json: Adventure.new(@adventure).to_serialized_json
        end 
    end     

    def index 
        @adventures = Adventure.all 
        render json: AdventureSerializer.new(@adventures).to_serialized_json
    end 

    private 

        def adventure_params
            params.require(:adventure).permit(:adventure_number, :story, :questions_1, :questions_2, :questions_3, :questions_4, :questions_5, :answer_1, :answer_2, :answer_3, :answer_4, :answer_5,
                :background_image_questions_1_to_4, :background_music_1_4, :background_image_question_5, :background_music_5, :background_image_won, 
                :background_music_won, :background_image_loss, :background_music_loss, :background_image_incorrect, :background_music_incorrect, :phrase_incorrect, 
                :background_image_correct, :background_music_correct, :phrase_correct, :user_id, :q1_c1, :q1_c2, :q1_c3, :q2_c1, :q2_c2, :q2_c3, :q3_c1, :q3_c2, :q3_c3, :q4_c1, :q4_c2, :q4_c3,
                :q5_c1, :q5_c2, :q5_c3, :id) 
        end 

end

#test

class AdventureSerializer

  def initialize(adventure_object) 
    @adventure = adventure_object
  end 

  def to_serialized_json
    options = {
      include: {
        hero: {
          except: [:updated_at, :created_at]
        }
      }, 
      except: [:updated_at, :created_at]
    }
    @adventure.to_json(options)
  end



  #:adventure_number, :story, :questions_1, :questions_2, :questions_3, :questions_4, :questions_5, :answer_1, :answer_2, :answer_3, :answer_4, 
  #:answer_5, :background_image_questions_1_to_4, :background_music_1_4, :background_image_question_5, :background_music_5, :background_image_won, 
  #:background_music_won, :background_image_loss, :background_music_loss, :background_image_incorrect, :background_music_incorrect, 
  #:phrase_incorrect, :background_image_correct, :background_music_correct, :phrase_correct, :won, :hero_id

  #belongs_to :hero 

end

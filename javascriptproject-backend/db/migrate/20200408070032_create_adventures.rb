class CreateAdventures < ActiveRecord::Migration[6.0]
  def change
    create_table :adventures do |t|
      t.integer :adventure
      t.text :story
      t.string :questions_1
      t.string :questions_2
      t.string :questions_3
      t.string :questions_4
      t.string :questions_5
      t.string :answer_1
      t.string :answer_2
      t.string :answer_3
      t.string :answer_4
      t.string :answer_5
      t.string :background_image_questions_1_to_4
      t.string :background_music_1_4
      t.string :background_image_question_5
      t.string :background_music_5
      t.string :background_image_won
      t.string :background_music_won
      t.string :background_image_loss
      t.string :background_music_loss
      t.string :background_image_incorrect
      t.string :background_music_incorrect
      t.string :phrase_incorrect
      t.string :background_image_correct
      t.string :background_music_correct
      t.string :phrase_correct
      t.boolean :won
      t.integer :user_id
      t.integer :hero_id

      t.timestamps
    end
  end
end

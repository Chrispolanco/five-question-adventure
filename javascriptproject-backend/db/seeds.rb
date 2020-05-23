# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hero.create([
    {name: "Tidus", character_class: "warrior", age: 17, health: 1}, 
    {name: "Cloud", character_class: "soldier", age: 19, health: 1}
]); 

Adventure.create([
    {adventure_number: 1, story: "First Story for Hero 1", questions_1: "Q1", questions_2: "Q2", questions_3: "Q3", questions_4: "Q4", questions_5: "Q5", answer_1: "choice 1",
    q1_c1: "choice 1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "choice 1", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "choice 1", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "choice 1", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "choice 1", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "backgroun 1-4", background_music_1_4: "background music 1-4", 
    background_image_question_5: "backgroung 5", background_music_5: "background 5", background_image_won: "background won", background_music_won: "background music won", 
    background_image_loss: "background loss", background_music_loss: "background music loss", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 1}, 

    {adventure_number: 1, story: "Second Story for Hero 1", questions_1: "Q1", questions_2: "Q2", questions_3: "Q3", questions_4: "Q4", questions_5: "Q5", answer_1: "choice 1",
    q1_c1: "choice 1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "choice 1", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "choice 1", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "choice 1", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "choice 1", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "backgroun 1-4", background_music_1_4: "background music 1-4", 
    background_image_question_5: "backgroung 5", background_music_5: "background 5", background_image_won: "background won", background_music_won: "background music won", 
    background_image_loss: "background loss", background_music_loss: "background music loss", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 1}, 
    
    {adventure_number: 1, story: "First Story for Hero 2", questions_1: "Q1", questions_2: "Q2", questions_3: "Q3", questions_4: "Q4", questions_5: "Q5", answer_1: "choice 1",
    q1_c1: "choice 1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "choice 1", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "choice 1", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "choice 1", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "choice 1", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "backgroun 1-4", background_music_1_4: "background music 1-4", 
    background_image_question_5: "backgroung 5", background_music_5: "background 5", background_image_won: "background won", background_music_won: "background music won", 
    background_image_loss: "background loss", background_music_loss: "background music loss", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 2}, 

    {adventure_number: 1, story: "Second Story for Hero 2", questions_1: "Q1", questions_2: "Q2", questions_3: "Q3", questions_4: "Q4", questions_5: "Q5", answer_1: "choice 1",
    q1_c1: "choice 1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "choice 1", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "choice 1", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "choice 1", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "choice 1", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "backgroun 1-4", background_music_1_4: "background music 1-4", 
    background_image_question_5: "backgroung 5", background_music_5: "background 5", background_image_won: "background won", background_music_won: "background music won", 
    background_image_loss: "background loss", background_music_loss: "background music loss", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 2}
]); 

User.create([
    {name: "Zelda", password_digest: "Zeldas Password", username: "Zelda", won_adventure_1: "FALSE", won_adventure_2: "FALSE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Tifa", password_digest: "Tifas Password", username: "Tifa", won_adventure_1: "FALSE", won_adventure_2: "FALSE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Aerith", password_digest: "Aeriths Passowrd", username: "Aerith", won_adventure_1: "FALSE", won_adventure_2: "FALSE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}
]); 


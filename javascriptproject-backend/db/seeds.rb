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
    {adventure_number: 1, story: "Tidus, as the most victorious warrior the kingdom has even seen. You have been given the duty and the honor to fight for it. One on one against the greatest 
        warrior the neighorbodring kingdom has ever seen. This upcoming duel will decide much more than who is indeed the strongest. It will decide wheather your kingdom will fall under their
        rule. Or if your kingdom will be adding a new area under their rule", 
    questions_1: "You must be ready for the upcoming duel. How do you decide to train?",
    questions_2: "While sparing you twist your ankle. What will you do?",
    questions_3: "You have changed your training to weight training which has resulted in powerful strikes. But how will you deal with your ankle during the duel?", 
    questions_4: "The day of the duel has arrived. Your ankle is wrapped. It will limit your mobility but you will be steady. Was is your weapon of choice? ", 
    questions_5: "Your choice of using your bare hands to make sure you don't add any more weight to your fragile ankle is brillant. During the duel your opponenet figures out your ankle is hurt. What will you do?", 
    q1_c1: "Endurance", q1_c2: "Spar", q1_c3: "Strength Training", 
    q2_c1: "Rest", q2_c2: "Continue to train", q2_c3: "Change training method", 
    q3_c1: "Wrap up ankle, it will limit your mobility", q3_c2: "Dont wrap, and grit it out", q3_c3: "Try new medicine on ankle",
    q4_c1: "Bare Hands", q4_c2: "Axe", q4_c3: "Long Sword", 
    q5_c1: "Strike him with your twisted ankle", q5_c2: "Lure him in, then strike him with a powerful uppercut", q5_c3: "Use your new strength, and go blow for blow",
    answer_1: "Spar", answer_2: "Change training method", answer_3: "Wrap up ankle, it will limit your mobility", answer_4: "Bare Hands", answer_5: "Strike him with your twisted ankle", background_image_questions_1_to_4: "url('./images/Hero_1/9.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", 
    background_image_question_5: "url('./images/Hero_1/8.png')", background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", 
    background_image_loss: "url('./images/Landscape/4.png')", background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "The Kingdom has fallen, it is now in the hands of your enemy", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "Brillant you strike him with your twisted ankle, something he didn't think you would ever do. While you did win the duel and your kingdom is safe you permamnent damage to your ankle has been done. But not to worry new warriors seeing your duel have taken an oath to be ready the next time a need arises.", 
    hero_id: 1}, 


    {adventure_number: 2, story: "Second Story for Hero 1", questions_1: "Q1-H1A2", questions_2: "Q2-H1A2", questions_3: "Q3-H1A2", questions_4: "Q4-H1A2", questions_5: "Q5-H1A2", answer_1: "A1",
    q1_c1: "A1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "A2", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "A3", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "A4", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "A5", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "url('./images/Hero_2/5.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", 
    background_image_question_5: "url('./images/Hero_2/4.png')", background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", 
    background_image_loss: "url('./images/Landscape/4.png')", background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 1}, 
    
    {adventure_number: 3, story: "First Story for Hero 2", questions_1: "Q1-H2A1", questions_2: "Q2-H2A1", questions_3: "Q3-H2A1", questions_4: "Q4-H2A1", questions_5: "Q5-H2A1", answer_1: "A1",
    q1_c1: "A1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "A2", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "A3", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "A4", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "A5", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "url('./images/Hero_3/1.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", 
    background_image_question_5: "url('./images/Hero_3/3.png')", background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", 
    background_image_loss: "url('./images/Landscape/4.png')", background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 2}, 

    {adventure_number: 4, story: "Second Story for Hero 2", questions_1: "Q1-H2A2", questions_2: "Q2-H2A2", questions_3: "Q3-H2A2", questions_4: "Q4-H2A2", questions_5: "Q5-H2A2", answer_1: "A1",
    q1_c1: "A1", q1_c2: "choice 2", q1_c3: "choice 3", q2_c1: "A2", q2_c2: "choice 2", q2_c3: "choice 3", q3_c1: "A3", q3_c2: "choice 2", q3_c3: "choice 3",
    q4_c1: "A4", q4_c2: "choice 2", q4_c3: "choice 3", q5_c1: "A5", q5_c2: "choice 2", q5_c3: "choice 3",
    answer_2: "A2", answer_3: "A3", answer_4: "A4", answer_5: "A5", background_image_questions_1_to_4: "url('./images/Hero_4/3.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", 
    background_image_question_5: "url('./images/Hero_4/2.png')", background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", 
    background_image_loss: "url('./images/Landscape/4.png')", background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", 
    background_music_incorrect: "background music incorrect", phrase_incorrect: "phrases incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", phrase_correct: "phrase correct", hero_id: 2}
]); 

User.create([
    {name: "Zelda", password_digest: "Zeldas Password", username: "Zelda", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Tifa", password_digest: "Tifas Password", username: "Tifa", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Aerith", password_digest: "Aeriths Passowrd", username: "Aerith", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}
]); 


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
    {adventure_number: 1, 
    story: "Tidus, as the most victorious warrior the kingdom has even seen. You have been given the duty and the honor to fight for it. One on one against the greatest 
    warrior the neighorbodring kingdom has ever seen. An equal in every way. This upcoming duel will decide once and for all who indeed, deserves the mantle of strongest in the land. But even more than that, 
    it will decide wheather your kingdom will fall under their rule. Or if your kingdom will be expanding beyond it boarders", 
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
    answer_1: "Spar", 
    answer_2: "Change training method", 
    answer_3: "Wrap up ankle, it will limit your mobility", 
    answer_4: "Bare Hands", 
    answer_5: "Strike him with your twisted ankle", 
    phrase_incorrect: "The Kingdom has fallen, it is now in the hands of your enemy",
    phrase_correct: "Brillant you strike him with your twisted ankle, something he didn't think you would ever do. While you did win the duel and your kingdom is safe you permamnent damage to your ankle has been done. But not to worry new warriors seeing your duel have taken an oath to be ready the next time a need arises.", 
    background_image_questions_1_to_4: "url('./images/Hero_1/9.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", background_image_question_5: "url('./images/Hero_1/8.png')", 
    background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", background_image_loss: "url('./images/Landscape/4.png')", 
    background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", background_music_incorrect: "background music incorrect",  background_image_correct: "background correct", 
    background_music_correct: "background music correct", hero_id: 1}, 


    {adventure_number: 2, 
    story: "Tidus, the kingdom is in the midst of its final preparation for a surprise attack. But the plans have been stolen from the generals home. You have been tasked
    with capturing retrieving these plans before they are given to the enemy. If you fail the enemy kingdom will have enough time to muster their soldiers and victory will no longer be secure.", 
    questions_1: "Where were you look for clues?", 
    questions_2: "In the black market you hear talk that their is somebody looking for the fastest horse available. What is your next step?", 
    questions_3: "Many are asking if you are to sell the hourse. You do not know how to find out who is the person that stole the plans. What do you ask them to find out who it is?", 
    questions_4: "While some ask for discounts due to not being able to sell the horse right away. One interest buyer is furiours that you wasted her time. You decide to follow this person, but you lose them in the crowd", 
    questions_5: "You bring you guards around and tell them to dress as they would on there days off and keep them close by. You have stated since there so much interest there will be an auction. You see the person you saw yesterday. Fearful that she may allude you again what do you do?",
    q1_c1: "Question soldiers on guard", q1_c2: "Visit black market", q1_c3: "Speak with general whose plans were stolen", 
    q2_c1: "Try to locate the person who is looking for the horse", q2_c2: "Boost to every person on the market that you have the fastest horse", q2_c3: "Lock down the market, so that they don't escape", 
    q3_c1: "I can sell you the hourse, but it will not be here until two days from now is that fine?", q3_c2: "Where will you be taking my prize possession?", q3_c3: "You arrest everybody who asked",
    q4_c1: "Try to track her down", q4_c2: "Pass the word that you got the hourse sooner that you expected", q4_c3: "Bribe every merchant that if she comes back to keep her busy", 
    q5_c1: "Tell the guards to quickly get her", q5_c2: "Let the auction proceed and hope she outbids everybody there to get here alone and capture her", q5_c3: "Ask to speak privately with her before the auction to apologize for wasting her time",
    answer_1: "Visit black market",
    answer_2: "Boost to every person on the market that you have the fastest horse", 
    answer_3: "I can sell you the hourse, but it will not be here until two days from now is that fine?", 
    answer_4: "Pass the word that you got the hourse sooner that you expected", 
    answer_5: "Ask to speak privately with her before the auction to apologize for wasting her time", 
    phrase_correct: "While hesistant at first, she follows you to the stable. While at first you start speaking to her that your sorry for wasting her time earlier that you will be giving her a discount if she does win. 
    You have the guards slowly surround the stable. Then when the time is right you show her the horse where two of your guards spring and capture her. The plans are found. The next week your kingdom launches the surprise 
    attack on our victorious",
    phrase_incorrect: "The plans get to the enemy kingdom. Instead of celebrations your kingdom barely fights off the enemy kingdom. Though it has cost them many lives and the kingdoms coffers are close to empty.",
    background_image_questions_1_to_4: "url('./images/Hero_2/5.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", background_image_question_5: "url('./images/Hero_2/4.png')", 
    background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", background_image_loss: "url('./images/Landscape/4.png')", 
    background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", background_music_incorrect: "background music incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct",  hero_id: 1}, 
    
    {adventure_number: 3, 
    story: "Cloud, such as your name you seem to go and disappear as soon as you arrive. You are known to be both a calm tranquil person as well as one that rains down destruction. Lately you have been searching
    for a clamer life so you have decided to settle down in a town you once visted at the start of your journey.", 
    questions_1: "When first arriving you are greeted by the locals who ask your name and part of your story. What do you say?", 
    questions_2: "While living under your new name Zach, you hear stories of a band of thieves attacking the town.", 
    questions_3: "While secretly investigating you see the thieve causing trouble around town. You see them threaten the townfolk and start to hurt them. You want to do something but what?", 
    questions_4: "While it takes every last strength not to do anything you wait for them to leave town. While following them outside of town you see the mayor kid following the bandits too", 
    questions_5: "You scare the kid off but throwing rocks at home. How will take care of the thieves?", 
    q1_c1: "Tell them who you are?", q1_c2: "Give them a false name Zach, and let them know that the war lead to you having to leave your old town", q1_c3: "Tell them to leave you alone", 
    q2_c1: "As the town folk about what you have heard", q2_c2: "Secretly investigate", q2_c3: "Do nothing", 
    q3_c1: "From the shadows try to grab their attention and take them out one by one", q3_c2: "Reveal who you are and scare them away", q3_c3: "Wait until they are leaving town",
    q4_c1: "You grab the kid and take him back to his parents", q4_c2: "Scare the kid so he leaves", q4_c3: "Show yourself and tell him to go home", 
    q5_c1: "Get in front of them and let them know who you are, and never to comeback", q5_c2: "Kncok them out and take everything away from them", q5_c3: "Stay in the shadows, and scare them off pretending to be a creature",
    answer_1: "Give them a false name Zach, and let them know that the war lead to you having to leave your old town",
    answer_2: "Secretly investigate", 
    answer_3: "Wait until they are leaving town", 
    answer_4: "Scare the kid so he leaves", 
    answer_5: "Stay in the shadows, and scare them off pretending to be a creature", 
    phrase_correct: "You stay in the shadows and using all the tricks you used and learned from others scare them into making them think you are a demon. They become so scared they never returning. Leaving you to spend the remainer of your 
    time in the village in peace",
    phrase_incorrect: "The villages finding out who you really are spread the word. This leads to many who wish to challenge you for fame and glory. You are forced to leave and start anew somewhere else",
    background_image_questions_1_to_4: "url('./images/Hero_3/1.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", background_image_question_5: "url('./images/Hero_3/3.png')", 
    background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", background_image_loss: "url('./images/Landscape/4.png')", 
    background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", background_music_incorrect: "background music incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", hero_id: 2}, 

    {adventure_number: 4, 
    story: "You have lived in a quiet town where nothing happens for many years. Until you hear a knock on your door. It's your sister surprised you miss the tears rolling down her checks. After
    coming down she tells you that her husband has been captured and is being used as bait to get you out of hiding. You tell her to wait in your home while you go out and rescue him. You tell 
    full responsiblity and let her know that you will be bringing him back. You done a mask and depart.", 
    questions_1: "You arrive at the outskirt of the city which is keep him hostage how do you enter.", 
    questions_2: "While scaling the wall you hear the guards just on top. You don't know how long you can hold onto the wall. What's your next step", 
    questions_3: "You manuever to the right and manage to get to the top of the wall. You explore trying to find where they are keeping him.", 
    questions_4: "You know time is short and you can't afford to stay there much longer you head to the lords chamber. You find that he is guarded and rather well.", 
    questions_5: "You scale the windows and manage to get to the balcony. When you peak through you see the lord and your sisters husband. He's being beaten by the lord.",
    q1_c1: "Straight throught the front door hiding in plain slight, under the guise of being merchange", q1_c2: "You enter throught the drainage", q1_c3: "You scale the wall", 
    q2_c1: "Hold on as long as you can", q2_c2: "Manuever to the right and out of their sight", q2_c3: "Throw coins away from where you are, trying to get them to investigate", 
    q3_c1: "Do you keep trying to find him while keeping to the shadows", q3_c2: "Capture a guard and get the information from them", q3_c3: "Head straight to the chambers of the lord",
    q4_c1: "Do you try to get the guards to leave their post", q4_c2: "Fight the guards", q4_c3: "Scale to the windows", 
    q5_c1: "Rush to save him", q5_c2: "Slowly enter the room", q5_c3: "Throw your sword at the lord",
    answer_1: "Stay in the shadows, and scare them off pretending to be a creature",
    answer_2: "Manuever to the right and out of their sight", 
    answer_3: "Head straight to the chambers of the lord", 
    answer_4: "Scale to the windows", 
    answer_5: "Slowly enter the room", 
    phrase_correct: "You slowly enter the room and get them all by surprise. They never expected somebody your age to scale the wall to the balcony. You take care of the lord and the inside guuards 
    and turn with your brother in law to scale down. You manage to get to the outer gate and rush home. While your happy that you managed to save him, you saddened of what happened. So you offer 
    them to stay with you and make a new life in the town. They accept which makes you happy knowing that you can keep them close and protect them if the need every arises again.",
    phrase_incorrect: "You brother in law did not make the night. You return to your sister and let her know. She is broken and so are you.",
    background_image_questions_1_to_4: "url('./images/Hero_4/3.png')", background_music_1_4: "./music/Adventures of Flying Jack.mp3", background_image_question_5: "url('./images/Hero_4/2.png')", 
    background_music_5: "background 5", background_image_won: "url('./images/Landscape/1.png')", background_music_won: "./music/Heroic Adventure.mp3", background_image_loss: "url('./images/Landscape/4.png')", 
    background_music_loss: "./music/Creepy Hallow.mp3", background_image_incorrect: "background incorrect", background_music_incorrect: "background music incorrect", background_image_correct: "background correct", 
    background_music_correct: "background music correct", hero_id: 2}
]); 

User.create([
    {name: "Zelda", password_digest: "Zeldas Password", username: "Zelda", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Tifa", password_digest: "Tifas Password", username: "Tifa", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}, 
    {name: "Aerith", password_digest: "Aeriths Passowrd", username: "Aerith", won_adventure_1: "FALSE", won_adventure_2: "TRUE", won_adventure_3: "FALSE", won_adventure_4: "FALSE"}
]); 


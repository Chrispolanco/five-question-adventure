class Adventure {
    constructor(adventureJson) {
        this.adventure_number = adventureJson.adventure_number; 
        this.story = adventureJson.story; 
        this.questions_1 = adventureJson.questions_1; 
        this.questions_2 = adventureJson.questions_2; 
        this.questions_3 = adventureJson.questions_3; 
        this.questions_4 = adventureJson.questions_4; 
        this.questions_5 = adventureJson.questions_5; 
        this.answer_1 = adventureJson.answer_1; 
        this.answer_2 = adventureJson.answer_2; 
        this.answer_3 = adventureJson.answer_3;
        this.answer_4 = adventureJson.answer_4;
        this.answer_5 = adventureJson.answer_5;
        this.background_image_questions_1_to_4 = adventureJson.background_image_questions_1_to_4;
        this.background_music_1_4 = adventureJson.background_music_1_4;
        this.background_image_question_5 = adventureJson.background_image_question_5;
        this.background_music_5 = adventureJson.background_music_5;
        this.background_image_won = adventureJson.background_image_won;
        this.background_music_won = adventureJson.background_music_won;
        this.background_image_loss = adventureJson.background_image_loss;
        this.background_music_loss = adventureJson.background_music_loss;
        this.background_image_incorrect = adventureJson.background_image_incorrect;
        this.background_music_incorrect = adventureJson.background_music_incorrect;
        this.phrase_incorrect = adventureJson.phrase_incorrect;
        this.background_image_correct = adventureJson.background_image_correct;
        this.background_music_correct = adventureJson.background_music_correct;
        this.phrase_correct = adventureJson.phrase_correct;
        this.hero_id = adventureJson.hero_id; 
    }; 

}
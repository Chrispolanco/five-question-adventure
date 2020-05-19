class Hero {
    constructor(heroJson) {
        this.id = heroJson.id; 
        this.name = heroJson.name;
        this.character_class = heroJson.character_class; 
        this.age = heroJson.age;  
        this.health = heroJson.health; 

/*       
        this.adventure_id = heroJson.adventures[0].id; 
        this.adventure_number = 
        this.story = 
        this.questions_1 = 
        this.questions_2 = 
        this.questions_3 = 
        this.questions_4 = 
        this.questions_5 = 
        this.answer_1 = 
        this.answer_2 = 
        this.answer_3 = 
        this.answer_4 = 
        this.answer_5 = 
        this.background_image_questions_1_to_4 = 
        this.background_music_1_4 = 
        this.background_image_question_5 = 
        this.background_music_5 = 
        this.background_image_won = 
        this.background_music_won = 
        this.background_image_loss = 
        this.background_music_loss = 
        this.background_image_incorrect = 
        this.background_music_incorrect = 
        this.phrase_incorrect = 
        this.phrase_incorrect = 
        this.background_image_correct = 
        this.background_music_correct =
        this.phrase_correct =
*/
    }

    heroHTML() {
        return (`
            <div class= "allHeros"> 
                <h2> ${this.name}, ${this.id}, ${this.character_class} </h2> 
                <ul> 
                    <li> ${this.age} </li> 
                    <li> ${this.health} </li> 
                </ul> 
            </div> 
        `);
    }

}
class Hero {
    constructor(heroJson) {
        this.id = heroJson.id; 
        this.name = heroJson.name;
        this.character_class = heroJson.character_class; 
        this.age = heroJson.age;  
        this.health = heroJson.health; 
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
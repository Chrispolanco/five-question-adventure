class User {
    constructor(userJSON) {
        this.id = userJson.id;
        this.username = userJSON.username;
        this.password_digest = userJSON.password_digest;
        this.name = userJSON.name;
        this.won_adventure_1 = userJSON.won_adventure_1;
        this.won_adventure_2 = userJSON.won_adventure_2;
        this.won_adventure_3 = userJSON.won_adventure_3;
        this.won_adventure_4 = userJSON.won_adventure_4;
    }
    
    userHTML() {
        return (`
            <div class= "allUsers"> 
                <h2> ${this.name}, ${this.username}, ${this.id} </h2> 
                <p> ${this.password_digest} </p> 
                <ul> 
                    <li> ${this.won_adventure_1} </li> 
                    <li> ${this.won_adventure_2} </li> 
                    <li> ${this.won_adventure_3} </li> 
                    <li> ${this.won_adventure_4} </li> 
                </ul> 
            </div> 
        `);
    }
}

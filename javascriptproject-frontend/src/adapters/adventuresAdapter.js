class AdventuresAdapter{

    constructor() {
        this.adventureBaseURL = 'https://five-question-adventure-api.herokuapp.com/adventures'
    }

    getAdventures() {
        return fetch(this.adventureBaseURL).then(resp => resp.json())
    }
}




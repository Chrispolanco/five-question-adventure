class HerosAdapter{

    constructor() {
        this.heroBaseURL = 'https://five-question-adventure-api.herokuapp.com/adventures/heros'
    }

    getHeros() {
        return fetch(this.heroBaseURL).then(resp => resp.json())
    }

}

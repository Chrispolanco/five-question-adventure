class AdventuresAdapter{

    constructor() {
        this.baseURL = 'http://localhost:3000/adventures'
    }

    getAdventures() {
        return fetch(this.baseURL).then(resp = resp.json())
    }
}




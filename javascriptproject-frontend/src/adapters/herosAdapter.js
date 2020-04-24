class HerosAdapter{

    constructor() {
        this.baseURL = 'http://localhost:3000/heros'
    }

    getHeros() {
        return fetch(this.baseURL).then(resp = resp.json())
    }
}

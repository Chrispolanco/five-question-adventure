  
class UsersAdapter {

    constructor() {
        this.baseUrl = 'http://localhost:3000/users'
    }

    getUsers() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    newUser(username, name) {
        const user = {
            username: username, 
            name: name
        }
        console.log('baseURL', this.baseUrl);
        return fetch(this.baseUrl, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
    }
// JSON.stringify(user)
}


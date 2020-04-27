  
class UsersAdapter {

    constructor() {
        this.baseUrl = 'http://localhost:3000/users'
    }

    getUsers() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    newUser(username, password_digest, name) {
        const user = {
            username: username, 
            password_digest: password_digest, 
            name: name
        }
        return fetch(this.base.URL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify(user)
        })
            .then(resp = resp.json())
    }

    showInfo(userId) {
        let configObj = {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        return fetch(this.baseUrl + `/$userId`, configObj)
            .then(resp => resp.json())
    }
    

}


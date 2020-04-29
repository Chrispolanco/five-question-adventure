class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.renderUsers()

    }

    retrieveAndLoadUsers() {
        this.adapter 
        .getUsers()
        .then(users => {
            users.forEach(user = this.users.push (new UsersAdapter(user)))
        })
        .then(()=> {
            this.renderUsers()
        })
    }

    renderUsers() {
        document.querySelectorAll('h4')[0].innerText = "hello"

    }


}
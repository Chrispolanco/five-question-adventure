class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingsAndEventListeners
        this.renderUsers()
        this.changebg()
        this.changemusic()
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
        document.querySelectorAll('h4')[0].innerText = "Hello 2000"
    }

    changebg() {
        const redBtn = document.querySelector('#toggle-red');   
        redBtn.addEventListener('click',(e)=>{
            e.preventDefault();
          document.body.style.backgroundImage =  "url('./images/2.jpg')";
       })
    }

    changemusic() { 
        const blueBtn = document.querySelector('#toggle-blue');
        blueBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            let audio = document.getElementById('audio');
            let audiosource = document.getElementById('audiosource'); 
            audiosource.src = "./music/01 - Fantastic Journey.mp3"; 
            audio.pause(); 
            audio.load(); 
        })  
    } 


}








       


class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.startMusic()
        this.changebg()
        this.changemusic()
/*        this.welcome()
        this.startScreen()
*/      this.fetchAndLoadUsers() 
    }

    startMusic() {
        const audio = document.getElementById('audio');
        audio.play(); 
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
            const audio = document.getElementById('audio');
            const audiosource = document.getElementById('audiosource'); 
            audiosource.src = "./music/01 - Fantastic Journey.mp3"; 
            audio.pause(); 
            audio.load(); 
            audio.play(); 
        })  
    } 

    welcome() {
        const topInnerText = document.querySelector(".topInnerText");
        topInnerText.classList.add("welcome") 
        topInnerText.classList.add("welcome:hover") 
        topInnerText.innerText = "Welcome traveler your journey awaits"
        topInnerText.classList.remove("topInnerText")
    }
 
    startScreen() {
        const topInnerText = document.querySelector(".welcome");

        setTimeout(function() {
            topInnerText.classList.remove("welcome"); 
            topInnerText.classList.remove("welcome:hover"); 
            topInnerText.classList.add("startScreen");
            topInnerText.innerText = "Is this your first adventure?"; 

            const menu_wrapper = document.createElement('div'); 
            menu_wrapper.className = "menu_wrapper"
            topInnerText.appendChild(menu_wrapper); 

            const menu_choice_one = document.createElement('Button'); 
            menu_choice_one.className = "menu_choice";
            menu_choice_one.innerText = "New Adventure"; 

            const menu_choice_two = document.createElement('Button'); 
            menu_choice_two.className = "menu_choice";
            menu_choice_two.innerText = "Log In"; 

            menu_wrapper.appendChild(menu_choice_one);
            menu_wrapper.appendChild(menu_choice_two); 
        }, 3000); 
    }

    fetchAndLoadUsers() {
        this.adapter
            .getUsers()
            .then(users =>{
                for(const user of users) {
                    let userObj = {
                        id: user.id,  
                        username: user.username, 
                        password_digest: user.password_digest, 
                        name: user.name, 
                        won_adventure_1: user.won_adventure_1, 
                        won_adventure_2: user.won_adventure_2, 
                        won_adventure_3: user.won_adventure_3, 
                        won_adventure_4: user.won_adventure_4
                    }
                    let newUser = new User(userObj)
                    this.users.push(newUser)
                }
            })
            .then(() => {
                this.renderUsers()
            })
    }; 

    renderUsers() {
        this.users.forEach(user => {
            const divCard = document.createElement('div')
            divCard.className = "user-card"

            divCard.id = `${user.id}`
            divCard.username = `${user.username}`
            divCard.password_digest = `${user.password_digest}`
            divCard.name = `${user.name}`
            divCard.won_adventure_1 = `${user.won_adventure_1}`
            divCard.won_adventure_2 = `${user.won_adventure_2}`
            divCard.won_adventure_3 = `${user.won_adventure_3}`
            divCard.won_adventure_4 = `${user.won_adventure_4}`

            topInnerText.appendChild(divCard);
        })
    }

    first_question() {
        const questions = document.createElement('div'); 
        questions.className = "questions"; 
        questions.innerText = "You have the a choice for your type of tranportation what is your choice"; 
        startScreen.appendChild(questions); 

        const wrapper_questions = document.createElement('div');
        wrapper_questions.className = "wrapper_questions"; 
        questions.appendChild(wrapper_questions); 

        const firstChoice = document.createElement('Button'); 
        firstChoice.className = "buttons"; 
        firstChoice.innerText = "First"; 
        const secondChoice = document.createElement('Button'); 
        secondChoice.className = "buttons"; 
        secondChoice.innerText = "second";
        const thirdChoice = document.createElement('Button'); 
        thirdChoice.className = "buttons";
        thirdChoice.innerText = "third";  
        const fourthChoice = document.createElement('Button'); 
        fourthChoice.className = "buttons";
        fourthChoice.innerText = "fourth" 

        wrapper_questions.appendChild(firstChoice); 
        wrapper_questions.appendChild(secondChoice); 
        wrapper_questions.appendChild(thirdChoice); 
        wrapper_questions.appendChild(fourthChoice); 

    }



}








       

class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.startMusic()
        this.changebg()
        this.changemusic()
/*        this.welcome()
        this.startScreen()
      this.login() 
*/       this.fetchAndLoadUsers() 
        this.signin_form() 
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
                users.forEach(user => this.users.push(new User(user)))
            })
            .then(() => {
                this.renderUsers()
            })
    }; 

    signin_form() {
        const topInnerText = document.querySelector(".topInnerText")
        topInnerText.classList.add("top_sign_in")
        topInnerText.classList.remove("topInnerText")
        topInnerText.innerText = "How do we know your our brave hero?"

        const signin_form = document.querySelector(".signin_form")
        signin_form.style.display = "block"

        topInnerText.appendChild(signin_form)


    }

/*    login () {
        const topInnerText = document.querySelector(".topInnerText");
        topInnerText.classList.add("login") 
        topInnerText.classList.remove("topInnerText"); 
        topInnerText.innerText = "Welcome Back Hero"

        const divLogin = document.createElement('field')
        divLogin.className = "divlogin"
        topInnerText.appendChild(divLogin)

        const login_username = document.createElement('text_field') 
        login_username.className = "login_info"
        login_username.innerText= "Username"
        divLogin.appendChild(login_username)

        const login_password = document.createElement('password') 
        login_password.className = "login_info"
        login_password.innerText= "Password"
        divLogin.appendChild(login_password)

    }
/* 
/*    renderUsers() {
        this.users.forEach(user => {

            const divCard = document.createElement('div')
            divCard.className = "user_card"
            const topInnerText = document.querySelector(".topInnerText");
            topInnerText.appendChild(divCard);

            const user_ul = document.createElement('ul'); 
            user_ul.className = "user_ul"
            divCard.appendChild(user_ul);

            const user_li_id = document.createElement('li'); 
            user_li_id.className = "user_li"
            user_li_id.innerText = `${user.id}`
            user_ul.appendChild(user_li_id);
            const user_li_password_digest = document.createElement('li'); 
            user_li_password_digest.className = "user_li"
            user_li_password_digest.innerText = `${user.password_digest}`
            user_ul.appendChild(user_li_password_digest);
            const user_li_name = document.createElement('li'); 
            user_li_name.className = "user_li"
            user_li_name.innerText = `${user.name}`
            user_ul.appendChild(user_li_name);
            const user_li_won_adventure_1= document.createElement('li'); 
            user_li_won_adventure_1.className = "user_li"
            user_li_won_adventure_1.innerText = `${user.won_adventure_1}`
            user_ul.appendChild(user_li_won_adventure_1);
            const user_li_won_adventure_2= document.createElement('li'); 
            user_li_won_adventure_2.className = "user_li"
            user_li_won_adventure_2.innerText = `${user.won_adventure_2}`
            user_ul.appendChild(user_li_won_adventure_2);
            const user_li_won_adventure_3= document.createElement('li'); 
            user_li_won_adventure_3.className = "user_li"
            user_li_won_adventure_3.innerText = `${user.won_adventure_3}`
            user_ul.appendChild(user_li_won_adventure_3);
            const user_li_won_adventure_4= document.createElement('li'); 
            user_li_won_adventure_4.className = "user_li"
            user_li_won_adventure_4.innerText = `${user.won_adventure_4}`
            user_ul.appendChild(user_li_won_adventure_4);

        })
    }
*/ 

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








       

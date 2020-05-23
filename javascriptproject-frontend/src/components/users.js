class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.heros = []
        this.herosAdapter = new HerosAdapter()
        this.adventures = []
        this.adventuresAdapter = new AdventuresAdapter()
        this.changebg()
        this.changemusic()
        this.welcome()
    }

    /*    
            startMusic() {
            this.audio = document.getElementById('audio');
            this.audio.mute = false;
            this.audio.play();      
            }
    */

    changebg() {
        this.redBtn = document.querySelector('#toggle-red');
        this.redBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.style.backgroundImage = "url('./images/2.jpg')";
        })
    }

    changemusic() {
        this.blueBtn = document.querySelector('#toggle-blue');
        this.blueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.audio = document.getElementById('audio');
            this.audiosource = document.getElementById('audiosource');
            this.audiosource.src = "./music/01 - Fantastic Journey.mp3";
            this.audio.pause();
            this.audio.load();
            this.audio.play();
        })
    }

    welcome() {
        this.topInnerText = document.querySelector(".topInnerText");
        this.topInnerText.classList.add("welcome");
        this.topInnerText.classList.add("welcome:hover");
        this.topInnerText.innerText = "Welcome Hero your journey awaits";
        this.topInnerText.classList.remove("topInnerText");

        setTimeout(this.menuChoice.bind(this), 1000);
    }

    menuChoice() {
        this.topInnerText.classList.remove("welcome");
        this.topInnerText.classList.remove("welcome:hover");
        this.topInnerText.classList.add("startScreen");

        this.topInnerText.innerText = "Is this your first adventure?";

        this.menu_wrapper = document.createElement('div');
        this.menu_wrapper.className = "menu_wrapper"
        this.topInnerText.appendChild(this.menu_wrapper);

        this.menu_choice_one = document.createElement('Button');
        this.menu_choice_one.className = "menu_choice";
        this.menu_choice_one.innerText = "New Adventure";

        this.menu_choice_two = document.createElement('Button');
        this.menu_choice_two.className = "menu_choice";
        this.menu_choice_two.innerText = "Log In";

        this.menu_wrapper.appendChild(this.menu_choice_one);
        this.menu_wrapper.appendChild(this.menu_choice_two);

        this.menu_choice_two.addEventListener('click', this.fetchAndLoadUsers.bind(this));

    };


    fetchAndLoadUsers() {
        this.adapter
            .getUsers()
            .then(users => {
                users.forEach(user => this.users.push(new User(user)))
            })
            .then(() => {
                this.renderUsers()
            })
    };

    renderUsers() {
        this.topInnerText.classList.toggle("selectUser");
        this.topInnerText.innerText = "Which Brave Hero Might You Be?"

        this.users.forEach(user => {
            this.userInfo = document.createElement('button');
            this.userInfo.className = "buttonUsers"
            this.userInfo.innerText = `${user.name}`
            this.userInfo.id = `${user.id}`
            this.topInnerText.appendChild(this.userInfo);

            this.userInfo.addEventListener('click', (e) => {
                e.preventDefault();
                this.topInnerText.innerText = "Hello" + ` ${user.name} ` + "- Select your Hero"
                this.fetchAndLoadHeros();
            })
        })
    };

    fetchAndLoadHeros() {
        this.herosAdapter
            .getHeros()
            .then(heros => {
                heros.forEach(hero => this.heros.push(new Hero(hero)))
            })
            .then(() => {
                this.renderHeros()
            })
    };


    renderHeros() {

        this.heros.forEach(hero => {
            const heroInfo = document.createElement('button')
            heroInfo.className = "buttonHeros"
            heroInfo.innerText = `${hero.name}`
            heroInfo.id = `${hero.id}`
            this.topInnerText.appendChild(heroInfo)

            heroInfo.addEventListener('click', (e) => {
                e.preventDefault();
                this.topInnerText.innerText = `${heroInfo.innerText}, ` + "which adventure calls you?"
                this.hero = heroInfo.id;
                this.fetchAndLoadAdventures(); 
            })
        })
    };


    fetchAndLoadAdventures() {
        this.adventuresAdapter
            .getAdventures()
            .then(adventures => {
                adventures.forEach(adventure => this.adventures.push(new Adventure(adventure)))
            })
            .then(() => {
                this.renderAdventures()
            })
    };

    renderAdventures() {
        this.adventures.forEach(adventure => {
            const adventureBTN = document.createElement('button');
            adventureBTN.className = "buttonHeros"

            adventureBTN.id = `${adventure.id}`; 
            adventureBTN.adventure_number = `${adventure.adventure_number}`; 
            adventureBTN.story = `${adventure.story}`; 
            adventureBTN.questions_1 = `${adventure.questions_1}`; 
            adventureBTN.questions_2 = `${adventure.questions_2}`; 
            adventureBTN.questions_3 = `${adventure.questions_3}`; 
            adventureBTN.questions_4 = `${adventure.questions_4}`; 
            adventureBTN.questions_5 =`${adventure.questions_5}`; 
            adventureBTN.answer_1 = `${adventure.answer_1}`; 
            adventureBTN.answer_2 = `${adventure.answer_2}`; 
            adventureBTN.answer_3 = `${adventure.answer_3}`;
            adventureBTN.answer_4 = `${adventure.answer_4}`;
            adventureBTN.answer_5 = `${adventure.answer_5}`;
            adventureBTN.background_image_questions_1_to_4 = `${adventure.background_image_questions_1_to_4}`;
            adventureBTN.background_music_1_4 = `${adventure.background_music_1_4}`;
            adventureBTN.background_image_question_5 = `${adventure.background_image_question_5}`;
            adventureBTN.background_music_5 = `${adventure.background_music_5}`;
            adventureBTN.background_image_won = `${adventure.background_image_won}`;
            adventureBTN.background_music_won = `${adventure.background_music_won}`;
            adventureBTN.background_image_loss = `${adventure.background_image_loss}`;
            adventureBTN.background_music_loss = `${adventure.background_music_loss}`;
            adventureBTN.background_image_incorrect = `${adventure.background_image_incorrect}`;
            adventureBTN.background_music_incorrect = `${adventure.background_music_incorrect}`;
            adventureBTN.phrase_incorrect = `${adventure.phrase_incorrect}`;
            adventureBTN.background_image_correct = `${adventure.background_image_correct}`;
            adventureBTN.background_music_correct = `${adventure.background_music_correct}`;
            adventureBTN.phrase_correct = `${adventure.phrase_correct}`;
            adventureBTN.q1_c1 = `${adventure.q1_c1}`; 
            adventureBTN.q1_c2 = `${adventure.q1_c2}`; 
            adventureBTN.q1_c3 = `${adventure.q1_c3}`; 
            adventureBTN.q2_c1 = `${adventure.q2_c1}`; 
            adventureBTN.q2_c2 = `${adventure.q2_c2}`; 
            adventureBTN.q2_c3 = `${adventure.q2_c3}`; 
            adventureBTN.q3_c1 = `${adventure.q3_c1}`; 
            adventureBTN.q3_c2 = `${adventure.q3_c2}`; 
            adventureBTN.q3_c3 = `${adventure.q3_c3}`; 
            adventureBTN.q4_c1 = `${adventure.q4_c1}`; 
            adventureBTN.q4_c2 = `${adventure.q4_c2}`; 
            adventureBTN.q4_c3 = `${adventure.q4_c3}`; 
            adventureBTN.q5_c1 = `${adventure.q5_c1}`; 
            adventureBTN.q5_c2 = `${adventure.q5_c2}`; 
            adventureBTN.q5_c3 = `${adventure.q5_c3}`; 
            adventureBTN.hero_id = `${adventure.hero_id}`; 
            adventureBTN.innerText = `${adventure.story}`; 
        
            if (adventureBTN.hero_id === this.hero) {
                this.topInnerText.appendChild(adventureBTN);
            }   
            
            adventureBTN.addEventListener('click', (e)=> {
                e.preventDefault(); 
                this.adventure =  adventureBTN; 
                this.first_question(); 
            })

        })
    };


    first_question() {
        this.topInnerText.innerText = ""
        const questions = document.createElement('div');
        questions.className = "questions";
        questions.innerText = this.adventure.story;
        this.topInnerText.appendChild(questions);

        const wrapper_questions = document.createElement('div');
        wrapper_questions.className = "wrapper_questions";
        questions.appendChild(wrapper_questions);

        const firstChoice = document.createElement('Button');
        firstChoice.className = "buttons";
        firstChoice.innerText = this.adventure.q1_c1;
        const secondChoice = document.createElement('Button');
        secondChoice.className = "buttons";
        secondChoice.innerText = this.adventure.q1_c1;
        const thirdChoice = document.createElement('Button');
        thirdChoice.className = "buttons";
        thirdChoice.innerText = this.adventure.q1_c1;
/*
        const fourthChoice = document.createElement('Button');
        fourthChoice.className = "buttons";
        fourthChoice.innerText = "fourth"
*/ 

        wrapper_questions.appendChild(firstChoice);
        wrapper_questions.appendChild(secondChoice);
        wrapper_questions.appendChild(thirdChoice);
        wrapper_questions.appendChild(fourthChoice);

    };



}






























/*    signin_form() {
        const topInnerText = document.querySelector(".topInnerText")
        topInnerText.classList.add("top_sign_in")
        topInnerText.classList.remove("topInnerText")
        topInnerText.innerText = "How do we know your our brave hero?"
        const signin_form = document.querySelector(".signin_form")
        signin_form.style.display = "block"
        topInnerText.appendChild(signin_form)
        const signin_form_button = document.querySelector('#Login')
        signin_form_button.addEventListener('click', (e) => {
            e.preventDefault()
            topInnerText.innerText = "worked"
        })
    }
*/

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
*/
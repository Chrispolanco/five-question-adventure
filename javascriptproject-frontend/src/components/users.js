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
            document.body.style.backgroundImage = "url('./images/Landscape/4.png')";
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
            const adventureInfo = document.createElement('button');
            adventureInfo.className = "buttonHeros"

            adventureInfo.id = `${adventure.id}`; 
            adventureInfo.adventure_number = `${adventure.adventure_number}`; 
            adventureInfo.story = `${adventure.story}`; 
            adventureInfo.questions_1 = `${adventure.questions_1}`; 
            adventureInfo.questions_2 = `${adventure.questions_2}`; 
            adventureInfo.questions_3 = `${adventure.questions_3}`; 
            adventureInfo.questions_4 = `${adventure.questions_4}`; 
            adventureInfo.questions_5 =`${adventure.questions_5}`; 
            adventureInfo.answer_1 = `${adventure.answer_1}`; 
            adventureInfo.answer_2 = `${adventure.answer_2}`; 
            adventureInfo.answer_3 = `${adventure.answer_3}`;
            adventureInfo.answer_4 = `${adventure.answer_4}`;
            adventureInfo.answer_5 = `${adventure.answer_5}`;
            adventureInfo.background_image_questions_1_to_4 = `${adventure.background_image_questions_1_to_4}`;
            adventureInfo.background_music_1_4 = `${adventure.background_music_1_4}`;
            adventureInfo.background_image_question_5 = `${adventure.background_image_question_5}`;
            adventureInfo.background_music_5 = `${adventure.background_music_5}`;
            adventureInfo.background_image_won = `${adventure.background_image_won}`;
            adventureInfo.background_music_won = `${adventure.background_music_won}`;
            adventureInfo.background_image_loss = `${adventure.background_image_loss}`;
            adventureInfo.background_music_loss = `${adventure.background_music_loss}`;
            adventureInfo.background_image_incorrect = `${adventure.background_image_incorrect}`;
            adventureInfo.background_music_incorrect = `${adventure.background_music_incorrect}`;
            adventureInfo.phrase_incorrect = `${adventure.phrase_incorrect}`;
            adventureInfo.background_image_correct = `${adventure.background_image_correct}`;
            adventureInfo.background_music_correct = `${adventure.background_music_correct}`;
            adventureInfo.phrase_correct = `${adventure.phrase_correct}`;
            adventureInfo.q1_c1 = `${adventure.q1_c1}`; 
            adventureInfo.q1_c2 = `${adventure.q1_c2}`; 
            adventureInfo.q1_c3 = `${adventure.q1_c3}`; 
            adventureInfo.q2_c1 = `${adventure.q2_c1}`; 
            adventureInfo.q2_c2 = `${adventure.q2_c2}`; 
            adventureInfo.q2_c3 = `${adventure.q2_c3}`; 
            adventureInfo.q3_c1 = `${adventure.q3_c1}`; 
            adventureInfo.q3_c2 = `${adventure.q3_c2}`; 
            adventureInfo.q3_c3 = `${adventure.q3_c3}`; 
            adventureInfo.q4_c1 = `${adventure.q4_c1}`; 
            adventureInfo.q4_c2 = `${adventure.q4_c2}`; 
            adventureInfo.q4_c3 = `${adventure.q4_c3}`; 
            adventureInfo.q5_c1 = `${adventure.q5_c1}`; 
            adventureInfo.q5_c2 = `${adventure.q5_c2}`; 
            adventureInfo.q5_c3 = `${adventure.q5_c3}`; 
            adventureInfo.hero_id = `${adventure.hero_id}`; 

            adventureInfo.innerText = `${adventure.adventure_number}`; 
        
            if (adventureInfo.hero_id === this.hero) {
                this.topInnerText.appendChild(adventureInfo)
            }; 
            
            adventureInfo.addEventListener('click', (e)=> {
                e.preventDefault();  
                this.adventureInfo = adventureInfo
                this.storyInfo(); 
            })

        })
    };


    storyInfo() {
        this.topInnerText.innerText = this.adventureInfo.story;
        setTimeout(this.first_question.bind(this), 3000);
    }


    first_question() {
        this.topInnerText.innerText = this.adventureInfo.questions_1;
        this.topInnerText.className = "questions";

        this.wrapper_questions = document.createElement('div');
        this.wrapper_questions.className = "wrapper_questions";
        this.topInnerText.appendChild(this.wrapper_questions);

        this.firstChoice = document.createElement('Button');
        this.firstChoice.className = "buttons";
        this.firstChoice.innerText = this.adventureInfo.q1_c1;
        this.secondChoice = document.createElement('Button');
        this.secondChoice.className = "buttons";
        this.secondChoice.innerText = this.adventureInfo.q1_c2;
        this.thirdChoice = document.createElement('Button');
        this.thirdChoice.className = "buttons";
        this.thirdChoice.innerText = this.adventureInfo.q1_c3;

        this.wrapper_questions.appendChild(this.firstChoice);
        this.wrapper_questions.appendChild(this.secondChoice);
        this.wrapper_questions.appendChild(this.thirdChoice);

        this.wrapper_questions.addEventListener('click', (e)=> {
            e.preventDefault(); 
            if(e.target.innerText === this.adventureInfo.answer_1) {
                this.correctChoiceOne(); 
            } else {
                this.wrongChoiceOne();
            }
        })
     };


    second_question() {

        this.topInnerText.innerText = this.adventureInfo.questions_2;

        this.wrapper_questions = document.createElement('div');
        this.wrapper_questions.className = "wrapper_questions";
        this.topInnerText.appendChild(this.wrapper_questions);

        this.firstChoice.innerText = this.adventureInfo.q2_c1;
        this.secondChoice.innerText = this.adventureInfo.q2_c2;
        this.thirdChoice.innerText = this.adventureInfo.q2_c3;

        this.wrapper_questions.appendChild(this.firstChoice);
        this.wrapper_questions.appendChild(this.secondChoice);
        this.wrapper_questions.appendChild(this.thirdChoice);

        this.wrapper_questions.addEventListener('click', (e)=> {
            e.preventDefault(); 
            if(e.target.innerText === this.adventureInfo.answer_2) {
                this.correctChoiceTwo(); 
            } else {
                this.wrongChoiceTwo();
            }
        })
    };

    third_question() {

        this.topInnerText.innerText = this.adventureInfo.questions_3;

        this.wrapper_questions = document.createElement('div');
        this.wrapper_questions.className = "wrapper_questions";
        this.topInnerText.appendChild(this.wrapper_questions);

        this.firstChoice.innerText = this.adventureInfo.q3_c1;
        this.secondChoice.innerText = this.adventureInfo.q3_c2;
        this.thirdChoice.innerText = this.adventureInfo.q3_c3;

        this.wrapper_questions.appendChild(this.firstChoice);
        this.wrapper_questions.appendChild(this.secondChoice);
        this.wrapper_questions.appendChild(this.thirdChoice);

        this.wrapper_questions.addEventListener('click', (e)=> {
            e.preventDefault(); 
            if(e.target.innerText === this.adventureInfo.answer_3) {
                this.correctChoiceThree(); 
            } else {
                this.wrongChoiceThree();
            }
        })
    };
    
    fourth_question() {

        this.topInnerText.innerText = this.adventureInfo.questions_4;

        this.wrapper_questions = document.createElement('div');
        this.wrapper_questions.className = "wrapper_questions";
        this.topInnerText.appendChild(this.wrapper_questions);

        this.firstChoice.innerText = this.adventureInfo.q4_c1;
        this.secondChoice.innerText = this.adventureInfo.q4_c2;
        this.thirdChoice.innerText = this.adventureInfo.q4_c3;

        this.wrapper_questions.appendChild(this.firstChoice);
        this.wrapper_questions.appendChild(this.secondChoice);
        this.wrapper_questions.appendChild(this.thirdChoice);

        this.wrapper_questions.addEventListener('click', (e)=> {
            e.preventDefault(); 
            if(e.target.innerText === this.adventureInfo.answer_4) {
                this.correctChoiceFour(); 
            } else {
                this.wrongChoiceFour();
            }
        })
    };

    fifth_question() {

        this.topInnerText.innerText = this.adventureInfo.questions_5;

        this.wrapper_questions = document.createElement('div');
        this.wrapper_questions.className = "wrapper_questions";
        this.topInnerText.appendChild(this.wrapper_questions);

        this.firstChoice.innerText = this.adventureInfo.q5_c1;
        this.secondChoice.innerText = this.adventureInfo.q5_c2;
        this.thirdChoice.innerText = this.adventureInfo.q5_c3;

        this.wrapper_questions.appendChild(this.firstChoice);
        this.wrapper_questions.appendChild(this.secondChoice);
        this.wrapper_questions.appendChild(this.thirdChoice);

        this.wrapper_questions.addEventListener('click', (e)=> {
            e.preventDefault(); 
            if(e.target.innerText === this.adventureInfo.answer_5) {
                this.correctChoiceFive(); 
            } else {
                this.wrongChoiceFive();
            }
        })
    };


    wrongChoiceOne() {
        this.topInnerText.innerText = "Wrong Answer";  
        setTimeout(this.first_question.bind(this), 3000);
    }; 

    wrongChoiceTwo() {
        this.topInnerText.innerText = "Wrong Answer";  
        setTimeout(this.second_question.bind(this), 3000);
    }; 

    wrongChoiceThree() {
        this.topInnerText.innerText = "Wrong Answer";  
        setTimeout(this.third_question.bind(this), 3000);
    }; 

    wrongChoiceFour() {
        this.topInnerText.innerText = "Wrong Answer";  
        setTimeout(this.fourth_question.bind(this), 3000);
    }; 

    wrongChoiceFive() {
        this.topInnerText.innerText = "Wrong Answer";  
        setTimeout(this.fifth_question.bind(this), 3000);
    }; 

    correctChoiceOne() {
        this.topInnerText.innerText = "Right Answer";  
        setTimeout(this.second_question.bind(this), 3000);
    }; 

    correctChoiceTwo() {
        this.topInnerText.innerText = "Right Answer";  
        setTimeout(this.third_question.bind(this), 3000);
    }; 

    correctChoiceThree() {
        this.topInnerText.innerText = "Right Answer";  
        setTimeout(this.fourth_question.bind(this), 3000);
    }; 

    correctChoiceFour() {
        this.topInnerText.innerText = "Right Answer";  
        setTimeout(this.fifth_question.bind(this), 3000);
    }; 

    correctChoiceFive() {
        this.topInnerText.innerText = "Right Answer";  
        setTimeout(this.renderHeros().bind(this), 3000);
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
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
        this.topInnerText.innerText = "Which Brave Hero Might You Be?"

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
            adventureBTN.innerText = `${adventure.adventure_number}`
            adventureBTN.heroId = `${adventure.hero_id}`
        
            if (adventureBTN.heroId === this.hero) {
                this.topInnerText.appendChild(adventureBTN);
            }   
        })  
    };




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
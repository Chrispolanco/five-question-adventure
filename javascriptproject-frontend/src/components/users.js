class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.startMusic()
        this.changebg()
        this.changemusic()
        this.welcome()
        this.welcomeMessage()
    }

    startMusic() {
        const audio = document.getElementById('audio');
        audio.play(); 
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
 
    welcomeMessage() {
        const topInnerText = document.querySelector(".welcome");

        setTimeout(function() {
            topInnerText.classList.remove("welcome"); 
            topInnerText.classList.remove("welcome:hover"); 
            topInnerText.classList.add("topInnerText");
            topInnerText.innerText = " "; 

            const questions = document.createElement('div'); 
            questions.className = "questions"; 
            questions.innerText = "You have the a choice for your type of tranportation what is your choice"; 
            topInnerText.appendChild(questions); 

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

        }, 1); 

    }



}








       

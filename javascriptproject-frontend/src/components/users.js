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
            topInnerText.innerText = " Hello "; 

            const middleInnerText = document.createElement('div'); 
            middleInnerText.className = "middleInnerText"; 
            const firstChoice = document.createElement('li'); 
            firstChoice.className = "choices"; 
            firstChoice.innerText = "first"; 
            const secondChoice = document.createElement('li'); 
            secondChoice.className = "choices"; 
            secondChoice.innerText = "second";
            const thirdChoice = document.createElement('li'); 
            thirdChoice.className = "choices";
            thirdChoice.innerText = "third";  
            const fourthChoice = document.createElement('li'); 
            fourthChoice.className = "choices";
            fourthChoice.innerText = "fourth" 
              
            middleInnerText.innerText = "You have the a choice for your type of tranportation what is your choice"; 
            topInnerText.appendChild(middleInnerText); 

            middleInnerText.appendChild(firstChoice); 
            middleInnerText.appendChild(secondChoice); 
            middleInnerText.appendChild(thirdChoice); 
            middleInnerText.appendChild(fourthChoice); 

        }, 1); 

    }



}








       

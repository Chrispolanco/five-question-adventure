class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.startMusic()
        this.changebg()
        this.changemusic()
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

    welcomeMessage() {
        const topInnerText = document.querySelector(".topInnerText");
        topInnerText.classList.add("welcome") 
        topInnerText.classList.add("welcome:hover") 
        topInnerText.innerText = "Welcome traveler your journey awaits"
        topInnerText.classList.remove("topInnerText")

        topInnerText.classList.remove("welcome") 
        topInnerText.classList.remove("welcome:hover") 
        topInnerText.innerText = " "
        topInnerText.classList.add("topInnerText")

    }
 


}








       

/*setTimeout(function() {
    topInnerText.classList.add("welcome") 
    topInnerText.classList.add("welcome:hover") 
    topInnerText.classList.remove("topInnerText")
}, 1); 
*/ 
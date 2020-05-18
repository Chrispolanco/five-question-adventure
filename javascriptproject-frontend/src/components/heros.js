/* 
class Heros {
    constructor() {
        this.heros = []
        this.adapter = new HerosAdapter()
   }



} 



                this.detailedInfo.innerText = `${user.won_adventure_1}`
                this.detailedInfo.innerText = `${user.won_adventure_2}`
                this.detailedInfo.innerText = `${user.won_adventure_3}`
                this.detailedInfo.innerText = `${user.won_adventure_4}`


    fetchAndLoadHeros() {
        this.adapter
            .getHeros()
            .then(heros =>{
                heros.forEach(user => this.heros.push(new Hero(user)))
            })
            .then(() => {
                this.renderHeros()
            })
    }; 

    renderHeros() {
        this.topInnerText = document.querySelector(".selectUser"); 

            this.heros.forEach(hero => {
            this.heroInfo = document.createElement('li'); 
            this.heroInfo.className = "buttonUsers"
            this.heroInfo.innerText = `${hero.name}`
            this.heroInfo.id = `${hero.id}`
            
            this.topInnerText.appendChild(heroInfo);
        }
    };    
    
*/ 
/*--------------------------------------------Create Players------------------------------------*/

let player1 ;
let player2 ;



/*--------------------------------------------Character's Name----------------------------------*/


showHideElement (document.getElementById("Herm"), false)
showHideElement (document.getElementById("Tyn"), false)
showHideElement (document.getElementById("Raynel"), false)
showHideElement (document.getElementById("Grent"), false)

/*---------------------------------------------Display None-------------------------------------*/

showHideElement (document.getElementById("health1"), false)
showHideElement (document.getElementById("health2"), false)
showHideElement (document.getElementById("attackdisplay1"), false)
var tableauBoutons = document.querySelectorAll(".tonbou")

tableauBoutons.forEach(element => {
    showHideElement (element, false)
    
});


/*----------------------------------------------Display attaques et les boutons lorsque Persos sélectionnés-------------------*/

var player1Ready = false;
var player2Ready = false;

var selectRace1 = document.getElementById("race1")
var selectRace2 = document.getElementById("race2")

var selectObject1 = document.getElementById("object1")
var selectObject2 = document.getElementById("object2")

var selectRaceArray = [selectRace1, selectRace2]
selectRaceArray.forEach(element => {

    element.addEventListener("change", (e) => {

        const valueOfSelectElement =  e.target.selectedOptions[0].value

        if(element.id == "race1") {

            changePlayerPortrait (1, "./images/" + valueOfSelectElement + ".png" )
        
        } else if (element.id == "race2") {

            changePlayerPortrait (2, "./images/" + valueOfSelectElement + ".png" )

        }
    }  )
})


var boutonEnvoyer1 = document.getElementById("envoyer1")
var boutonEnvoyer2 = document.getElementById("envoyer2")
const boutonsArray = [boutonEnvoyer1, boutonEnvoyer2]

boutonsArray.forEach(element => {
    element.addEventListener("click", (e) => {
        
        e.preventDefault()

        if (element.id == "envoyer1"){

            player1Ready = true

        } else {

            player2Ready = true

        }


        if (player1Ready && player2Ready) {

            startGame ()
              
        }
    
    })
})



/*------------------------------------------------Items-----------------------------------------------*/
const items = [
    {
        type: "bottes",
        //effet: (DEX + 30),
    },
    {
        type: "baton",
        //effet: (HP + 20),
    },
    {
        type: "epee",
        //effet: (ATK + 30),
    },
    {
        type: "arc",
        //effet: ("atkx2"),
    },
]
/*------------------------------------------------Fonctions-------------------------------------------------------------------*/

function startGame (){

    player1 = new Player (document.getElementById("player1Name").value, selectRace1.selectedOptions[0].value, selectObject1.selectedOptions[0].value) 
    player2 = new Player (document.getElementById("player2Name").value, selectRace2.selectedOptions[0].value, selectObject2.selectedOptions[0].value)

    console.log(player1, player2)
    
     showGameElements ()

}

function showGameElements (){

    showHideElement (document.getElementById("attackdisplay1"), true)

    showHideElement (document.getElementById("health1"), true)

    showHideElement (document.getElementById("health2"), true)
    
    tableauBoutons.forEach(element => {

        showHideElement (element, true)
    
    });

}













function showHideElement (element, show){

    if (show === true){

        element.classList.remove ("hidden")

    } else if (show === false){
        element.classList.add ("hidden")
    }
        


}
 
function changePlayerPortrait (player, imgSrc) {

    if (player === 1){

        const imgPlayer1 = document.getElementById("portraitPlayer1")
        imgPlayer1.src= imgSrc

    } else if (player === 2) {

        const imgPlayer2 = document.getElementById("portraitPlayer2")
        imgPlayer2.src= imgSrc

    }
}



/*----------------------------------------------Character Generator--------------------------------*/
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(value){
        
        this.currenthealth += value

    };

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}


/*
var player1 = new Person("humain", "bottes")

var player2 = new Person("humain", "bottes")

player1.race = "vampire"
*/




/*--------------------------------------------Character's Name----------------------------------*/

showHideElement (document.getElementById("Herm"), false)
showHideElement (document.getElementById("Tyn"), false)
showHideElement (document.getElementById("Raynel"), false)
showHideElement (document.getElementById("Grent"), false)

/*---------------------------------------------Display None-------------------------------------*/


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

var selectArray = [selectRace1, selectRace2]
selectArray.forEach(element => {

    element.addEventListener("change", (e) => {

        if(element.selectedOptions[0].value == "elfe"){
            //in progress
        }
    } )
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
            
            showHideElement (document.getElementById("attackdisplay1"), true)
            
            tableauBoutons.forEach(element => {

                showHideElement (element, true)
            
            });
        }
    
    })
})

/*------------------------------------------------Races des Personnages-----------------------------------------------*/
const races = [
    {
        race: "Humain",
        name: "Herm",
        HP: 100,
        ATK: 100,
        DEF: 120,
        DEX: 100,
        img: "humain.png",
    },
    {
        race: "Elfe",
        name: "Tyn",
        HP: 100,
        ATK: 100,
        DEF: 100,
        DEX: 130,
        img: "Elf1.png",
    },
    {
        race: "Orc",
        name: "Raynel",
        HP: 140,
        ATK: 100,
        DEF: 100,
        DEX: 100,
        img: "Orc.png",
    },
    {
        race: "Vampire",
        name: "Grent",
        HP: 100,
        ATK: 100,
        DEF: 100,
        DEX: 100,
        CAP: "stealhp",
        img: "Lich.png",
    },
]

/*------------------------------------------------Items-----------------------------------------------*/
const items = [
    {
        type: "bottes",
        effet: (DEX + 30),
    },
    {
        type: "baton",
        effet: (HP + 20),
    },
    {
        type: "epee",
        effet: (ATK + 30),
    },
    {
        type: "arc",
        effet: ("atkx2"),
    },
]
/*------------------------------------------------Fonctions-------------------------------------------------------------------*/

function showHideElement (element, show){

    if (show === true){

        element.classList.remove ("hidden")

    } else if (show === false){
        element.classList.add ("hidden")
    }
        


}
/* 
function changePlayerPortrait (player, imgSrc) {

    if (player === 1){

        


    }
}
*/


/*----------------------------------------------Character Generator--------------------------------*/
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}
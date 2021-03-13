/*--------------------------------------------Initial page----------------------------------*/

let player1 ;
let player2 ;

showHideElement (document.getElementById("Herm"), false)
showHideElement (document.getElementById("Tyn"), false)
showHideElement (document.getElementById("Raynel"), false)
showHideElement (document.getElementById("Grent"), false)

showHideGameInterface (false)


/*----------------------------------------------Display attaques et les boutons lorsque Persos sélectionnés-------------------*/

let player1Ready = false;
let player2Ready = false;

let selectRace1 = document.getElementById("race1")
let selectRace2 = document.getElementById("race2")

let selectObject1 = document.getElementById("object1")
let selectObject2 = document.getElementById("object2")

let selectRaceArray = [selectRace1, selectRace2]
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


let boutonEnvoyer1 = document.getElementById("envoyer1")
let boutonEnvoyer2 = document.getElementById("envoyer2")
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

/*------------------------------------------------Fonctions-------------------------------------------------------------------*/

function startGame (){

    let playerSelector1 = document.getElementById("selector1")
    let playerSelector2 = document.getElementById("selector2")

    player1 = new Player (document.getElementById("player1Name").value, selectRace1.selectedOptions[0].value, selectObject1.selectedOptions[0].value) 
    player2 = new Player (document.getElementById("player2Name").value, selectRace2.selectedOptions[0].value, selectObject2.selectedOptions[0].value)

    
     showHideGameInterface (true)
     showHideElement (playerSelector1, false)
     showHideElement (playerSelector2, false)
     randomPlayerStart ()

}

function randomPlayerStart (){


    const oneOrTwo = Math.floor(Math.random() * 2) + 1 

    if (oneOrTwo === 1){

        playersTurn(1);

    } else if (oneOrTwo === 2){

        playersTurn(2);

    }
}

function showHideGameInterface (show){

        let attackDisplay =  document.getElementById("attackDisplay")

        let health1 = document.getElementById("health1")

        let health2 =  document.getElementById("health2")

        let tableauBoutons = document.querySelectorAll(".tonbouAction")


    if(show === true){

        showHideElement (attackDisplay, true)

        showHideElement (health1, true)

        showHideElement (health2, true)
        
        tableauBoutons.forEach(element => {

            showHideElement (element, true)
        
        });

    } else if (show === false) {

        showHideElement (attackDisplay, false)

        showHideElement (health1, false)

        showHideElement (health2, false)
        
        tableauBoutons.forEach(element => {

            showHideElement (element, false)
        
        });

    }

}

function showHideElement (element, show){

    if (show === true){

        element.classList.remove ("hidden")

    } else if (show === false){
        element.classList.add ("hidden")
    }
        


}
 
function changePlayerPortrait (player, imgSrc){

    if (player === 1){

        const imgPlayer1 = document.getElementById("portraitPlayer1")
        imgPlayer1.src= imgSrc

    } else if (player === 2) {

        const imgPlayer2 = document.getElementById("portraitPlayer2")
        imgPlayer2.src= imgSrc

    }
}

function attackLogDisplayMsg (message){

    const messageBox = document.getElementById("messageBox")

    const newMessage = document.createElement("p")

    newMessage.innerHTML = message

    messageBox.prepend(newMessage)

}

function showHidePlayersInterface (player, show){

    const tableauBoutonsPlayer1 = document.querySelectorAll("[data-player='1']")

    const tableauBoutonsPlayer2 = document.querySelectorAll("[data-player='2']")

    if (player === 1){
        
        
        tableauBoutonsPlayer1.forEach(playerButton => {
            
            if (show === true){
                
                showHideElement (playerButton, true)

            } else if (show === false){

                showHideElement (playerButton, false)

            }
        
        })

            
    } else if (player === 2){

        tableauBoutonsPlayer2.forEach(playerButton => {
            
            if (show === true){
                
                showHideElement (playerButton, true)

            } else if (show === false){

                showHideElement (playerButton, false)

            }
        
        })
    }



    

}

function playersTurn (player){

    

    if (player === 1){

        showHidePlayersInterface (2, false)
        showHidePlayersInterface (1, true)
        attackLogDisplayMsg ("Tour de " + player1.name)

        if(this.race === "vampire"){

            

        }
        

    } else if (player === 2){

        showHidePlayersInterface (1, false)
        showHidePlayersInterface (2, true)
        attackLogDisplayMsg ("Tour de " + player2.name) 
    }



}

function endGame (winner, message){

    attackLogDisplayMsg(message)

    let replay = confirm("Voulez-vous rejouer ?")

    if (replay){

        location.reload();

    } else {

        endGame (winner, message)
    }


}



/*----------------------------------------------Character Generator--------------------------------
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
*/


/*
var player1 = new Person("humain", "bottes")

var player2 = new Person("humain", "bottes")

player1.race = "vampire"
*/




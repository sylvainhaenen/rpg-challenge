let actionButtonsArray = document.querySelectorAll(".tonbouAction")

actionButtonsArray.forEach(button => {

    button.addEventListener("click", (e) => {


        if (button.dataset.player === "1"){

            if (button.classList.contains("tonbouHit")){


                let damageTaken = player1.hit(player2)


            } else if (button.classList.contains("tonbouHeal")){

                let healAmount = player1.heal()


            } else if (button.classList.contains("tonbouYield")){

                player1.yield()

                endGame(player2, player2.name + " Won ! " + player1.name + " gave up : (.")


            }

            playersTurn (2);


        } else  if (button.dataset.player === "2"){

            if (button.classList.contains("tonbouHit")){

                let damageTaken = player2.hit(player1)


            } else if (button.classList.contains("tonbouHeal")){

                let healAmount = player2.heal()


            } else if (button.classList.contains("tonbouYield")){

                player2.yield()

                endGame(player1, player1.name + " Won ! " + player2.name + " gave up : (.")


            }

            playersTurn(1)

        }

        

    })

})
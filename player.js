class Player {

    name = "" ; 
    race = "" ;
    item = "" ;
    firstTimeHit = true ;
    maxHealth = 100 ;
    currentHealth = 100 ;
    maxDamage = 20 ;
    maxHealing = 30 ;
    ATK = 10 ;
    DEF = 10 ;

    
    constructor (name, race, item){

        this.name = name
        this.race = race
        this.item = item
        this.initData ()

    }

     initData () {

       if (this.race == "orc") {

        this.maxHealth += this.maxHealth *0,4

       }

    }

    hit (player){

        let generatedDamage = this.generateDamage ()


        if (this.item === "épée"){

            generatedDamage += generatedDamage *0,3
            
        }

        if (player.race === "elfe"){

            let chanceToSendTheAttackBack = Math.round(Math.random()*100)

            if (chanceToSendTheAttackBack <= 30){

               this.takeDamage(generatedDamage/2) 
                attackLogDisplayMsg(player.name + " a renvoyé l'attaque de " + this.name)
                attackLogDisplayMsg(this.name + " a pris " +  generatedDamage/2 + " points de dégâts")

               return 0

            }

        }

        let damageTaken = player.takeDamage(generatedDamage)

        if (damageTaken > 0){
            
            attackLogDisplayMsg(this.name + " attaque " + player.name + " avec " + damageTaken + " points de dégâts");

        }

        if (player.currentHealth <= 0){

            endGame (this, this.name + " a battu " + player.name)

        } 

        if (this.item === "arc" && this.firstTimeHit){

         
            let chanceToHitTwice = Math.round(Math.random()*100)

            if (chanceToHitTwice <= 30){

                this.firstTimeHit = false
                let secondDamage = this.hit(player)
                this.firstTimeHit = true

                attackLogDisplayMsg(this.name + " a attaqué une deuxième fois grâce à son arc de luxe avec " + secondDamage + " points de dégâts !")
            }
        }


        return damageTaken



    }

    takeDamage (damage){


        if (this.item === "bottes"){

            let chanceToDodgeAttack = Math.round(Math.random()*100);

            if (chanceToDodgeAttack <=30){
    
                attackLogDisplayMsg(player.name + " a esquivé l'attaque grâce à ses bottes magiques")

                return 0
            }
        } else {

            if (this.race === "humain"){

                this.currentHealth -= damage - damage *0,2

                return damage - damage *0,2

            } else {

                this.currentHealth -= damage

                return damage

            }

        }

        
    } 

    generateDamage (){

        let randomNumber = this.getRandomInt(1, this.maxDamage)
        
        return randomNumber;

    }

    heal (){

        let randomHealing = this.getRandomInt(1, this.maxHealing)

        if (randomHealing >= this.maxHealth - this.currentHealth){

            randomHealing = this.maxHealth - this.currentHealth
            this.currentHealth += randomHealing

        } else {

            this.currentHealth += randomHealing

        }

        if (this.item === "baton") {

            randomHealing += randomHealing *0,2
            // ou pareil que  randomHealing = randomHealing + (randomHealing * 0,2)

        }

        attackLogDisplayMsg(this.name + " soigne " + randomHealing + " points de vie");
        return randomHealing


    }

    yield (){

        attackLogDisplayMsg(this.name + " s'est rendu !");

    }

    getRandomInt(min, max) { // min and max included 

        return Math.floor(Math.random() * (max - min + 1) + min);

      }

}








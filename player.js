class Player {

    name = "" ; 
    race = "" ;
    item = "" ;
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

        this.maxHealth += (this.maxHealth *40)/100

       }

    }

}
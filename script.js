class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}, you have killed my father.  Prepare to die.`);
    }
    showStats(){
        console.log(`Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
        this.strength = 10;
        this.speed = 10;
        this.health = 200;
    }
    showStats(){
        console.log(`Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health} Wisdom: ${this.wisdom}`);
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Gentlemen! It is not the flag that moves. It is not the wind that moves. It is your mind that moves.");
    }
}

const ryan = new Ninja("Ryan", 100);
ryan.sayName();
ryan.showStats();
ryan.drinkSake();
ryan.showStats();

const nick = new Sensei("Nick", 200);
nick.sayName();
nick.showStats();
nick.drinkSake();
nick.showStats();
nick.speakWisdom();
nick.showStats();
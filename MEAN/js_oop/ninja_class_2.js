function Ninja(name){
    this.name = name
    this.health = 100
    const speed = 3;
    const strength = 3;

    this.sayName = function(){
        console.log("My name is " + this.name)
    }
    this.showStats = function(){
        console.log("Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
    }
    this.drinkSake = function(){
        this.health += 10
    }
    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!")
        }
    }
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            let damage = 15 * strength
            ninja.health -= damage
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!")
        }
    }
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
console.log(blueNinja.health)
console.log(redNinja.health)
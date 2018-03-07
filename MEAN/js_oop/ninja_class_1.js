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
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
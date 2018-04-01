class Bike {
    private miles: number;
    constructor(public price: number, public max_speed: string) { 
        this.miles = 0;
    }
    displayInfo(){
        console.log("price: " + this.price + ", max_speed: " + this.max_speed + ", miles: " + this.miles);
    }
    ride(){
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse(){
        console.log("Reversing");
        if (this.miles >= 5 ){
            this.miles -= 5;
        }
        return this;
    }
}

var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(400, "30mph");
var bike3 = new Bike(120, "17mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
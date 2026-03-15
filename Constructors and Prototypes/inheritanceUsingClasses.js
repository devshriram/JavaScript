class Vehicle{
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    printDescription() {
        console.log("Vehicle ", this.numWheels, this.price);
    }
}

class Car extends Vehicle{
    constructor(price, numDoors) {
        super(4, price);
        this.numDoors = numDoors;
    }
    printDescription() {
        super.printDescription();
        console.log("Car", this.numDoors);
    }
}

var car = new Car(400000, 4);
console.log(car);
console.log(car.printDescription());
console.log(car.getPrice());
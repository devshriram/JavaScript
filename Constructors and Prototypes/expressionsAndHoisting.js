// Class constructor can't be call without 'new' keyword.
class Vehicle{
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}

var vehicle1 = Vehicle(2, 50000);
var vehicle2 = Vehicle(4, 100000);

// Hoisting declaration doesn't take place in class.
var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 100000);

class Vehicle{
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}

// We can create class Expression
var Vehicle = class{
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 100000);

console.log(vehicle1);
console.log(vehicle2);
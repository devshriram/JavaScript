function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
}

Vehicle.prototype.getPrice = function () {
    return this.price;
};

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 1000000);

console.log(Object);
console.log(Object.prototype);

var obj = new Object();

console.log(obj);
console.log(Object.getPrototypeOf(obj));
console.log(Object.prototype.isPrototypeOf(obj));
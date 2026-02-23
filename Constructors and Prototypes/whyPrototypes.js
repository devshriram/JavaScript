function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
}

Vehicle.prototype.getPrice = function() {
    return this.price;
};

var vehicle1 = new Vehicle(2, 200000);
var vehicle2 = new Vehicle(4, 400000);

console.log(vehicle1);
console.log(vehicle1.getPrice());
console.log(vehicle2);
console.log(vehicle2.getPrice());

Vehicle.prototype.color = "black";

console.log(vehicle1.color);
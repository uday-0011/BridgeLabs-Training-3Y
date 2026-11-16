// Q4: Constructor function and shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is created once and shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(this.brand + " " + this.model);
};

const carOne = new Car("Toyota", "Camry");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails(); // Toyota Camry
carTwo.getDetails(); // Honda Civic

console.log(
    "Shared method:",
    carOne.getDetails === carTwo.getDetails
); // true

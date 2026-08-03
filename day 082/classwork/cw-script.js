function Car(brand, model, mileage) {
    this.brand = brand;
    this.model = model;
    this._mileage = mileage;

    this.drive = function(km) {
        this._mileage += km;
    };

    this.info = function() {
        return `${this.brand} ${this.model} has driven ${this._mileage} km.`;
    };
}

const car1 = new Car("Toyota", "Corolla", 40000);
const car2 = new Car("BMW", "3 Series", 120000);

console.log(car1.info());
car1.drive(5000);
console.log(car1.info());

console.log(car2.info());
car2.drive(1500);
console.log(car2.info());
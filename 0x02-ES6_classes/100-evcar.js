import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class (Car) constructor
    this._range = range; // Store range as a private property
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Ensure the returned instance is of the Car class, not EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}

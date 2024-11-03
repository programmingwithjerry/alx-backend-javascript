export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store brand
    this._motor = motor; // Store motor
    this._color = color; // Store color
  }

  // Method to create a new instance of the Car class
  cloneCar() {
    const Clone = this.constructor[Symbol.species] || this.constructor;
    return new Clone(this._brand, this._motor, this._color);
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }
}

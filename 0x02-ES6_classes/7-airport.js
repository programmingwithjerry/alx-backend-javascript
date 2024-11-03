export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._name = name; // Store the airport name
    this._code = code; // Store the airport code
  }

  // Default string description of the class
  toString() {
    return this._code; // Return the airport code
  }
}

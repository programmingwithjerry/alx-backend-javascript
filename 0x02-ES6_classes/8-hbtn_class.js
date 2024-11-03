export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size; // Store the class size
    this._location = location; // Store the class location
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // Custom primitive conversion
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size; // Return size for number conversion
    }
    if (hint === 'string') {
      return this.location; // Return location for string conversion
    }
    return this; // Default case, return the object itself
  }
}

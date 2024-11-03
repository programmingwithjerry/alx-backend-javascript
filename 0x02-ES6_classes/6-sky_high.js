import Building from './5-building.';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft

    if (typeof floors !== 'number') {
      throw new TypeError('Number of floors must be a number');
    }
    this._floors = floors; // Store the number of floors
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

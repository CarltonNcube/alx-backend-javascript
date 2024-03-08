// Define an abstract class named Building
export default class Building {
  constructor(sqft) {
    // Check if the class being instantiated is the abstract class
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
    
    // Check if the subclass overrides the evacuationWarningMessage method
    if (!this.constructor.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    // Validate the input type
    if (typeof sqft !== 'number' || isNaN(sqft)) {
      throw new TypeError('Sqft must be a valid number');
    }
    this._sqft = sqft;
  }
}

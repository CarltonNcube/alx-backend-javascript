//Define an abstract class named building
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class "Building" cannot be instantiated directly');
    }
    if (!this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}

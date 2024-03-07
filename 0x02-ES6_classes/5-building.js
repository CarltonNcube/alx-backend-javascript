// Define an abstract class named Building
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class Building cannot be instantiated directly');
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

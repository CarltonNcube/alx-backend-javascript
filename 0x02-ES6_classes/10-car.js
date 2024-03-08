// Represents a Car class with a method for cloning objects.
const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  [cloneCarSymbol]() {
    const { _brand, _motor, _color } = this;
    return new (this.constructor[Symbol.species])(_brand, _motor, _color);
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}

export default Car;

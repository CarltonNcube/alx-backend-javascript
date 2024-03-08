const cloneCarSymbol = Symbol('cloneCar');

class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    [cloneCarSymbol]() {
        const { _brand, _motor, _color } = this;
        return new Car(_brand, _motor, _color);
    }

    cloneCar() {
        if (!(this instanceof Car)) {
            throw new Error('Species check failed: Object must be an instance of Car class');
        }
        return this[cloneCarSymbol]();
    }
}

export default Car;

class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor === Building) {
            throw new Error("Cannot instantiate abstract class Building");
        }
        if (typeof this.evacuationWarningMessage !== "function") {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(value) {
        this._sqft = value;
    }
}

export default Building;

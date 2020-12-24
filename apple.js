class Apple {
    constructor(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}
let apple = new Apple(10);
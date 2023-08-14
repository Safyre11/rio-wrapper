class Spec {
    _name;
    _role;

    constructor(name, role) {
        this._name = name;
        this._role = role;
    }


    get name() {
        return this._name;
    }

    get role() {
        return this._role;
    }
}

module.exports = Spec;
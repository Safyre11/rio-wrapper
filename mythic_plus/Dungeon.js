class Dungeon {
    name;
    shortName;
    constructor(name, shortName) {
        this.name = name;
        this.shortName = shortName;
    }

    getName() {
        return this.name;
    }

    getShortName() {
        return this.shortName;
    }
}

module.exports = Dungeon;
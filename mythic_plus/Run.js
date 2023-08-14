const Dungeon = require("./Dungeon");

class Run {
    static newRun(data){
        let run = new Run()
        run._dungeon = new Dungeon()
    }
}

module.exports = Run;
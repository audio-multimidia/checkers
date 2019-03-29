class Game {
    constructor() {
        
        this.RED = 1;
        this.BLACK = 2;
        this.EMPTY = 0;

        this.restart();
    }
    
    getState() {
        return this.state;
    }

    getEnumerators() {
        return {
            RED: this.RED,
            BLACK: this.BLACK,
            EMPTY: this.EMPTY
        }
    }

    restart() {
        this.state = [
            [0, 2, 0, 2, 0, 2, 0, 2], 
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    }
}
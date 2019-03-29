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
        /**
         * Estado padrao do jogo, 2 representam peças pretas, 1 representa peças vermelhas e 0
         * representa espaços sem nenhuma peça.
         */
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
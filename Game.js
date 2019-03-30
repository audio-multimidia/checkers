class Game {
    constructor() {
        
        this.RED = 1;
        this.BLACK = 2;
        this.EMPTY = 0;
        
        this.currentTurn = this.RED;

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

    passTurn() {
        this.currentTurn = this.currentTurn === this.RED ? this.BLACK : this.RED;
    }

    getPositionValue (x, y) {
        if (x < 0 || y < 0 || y >= this.state.length || x >= this.state[0].length)
            return

        return this.state[y][x]
    }

    /**
     * Move uma peça
     * @param {Float} x0 posicao X inicial
     * @param {Number} y0 posicao Y inicial
     * @param {Number} x posicao X final
     * @param {Number} y posicao Y final
     */
    move (x0, y0, x, y) {
        if (this.isInvalidMove(x0, y0, x, y))
            return
    
        let aux = this.state[y0][x0]
        this.state[y0][x0] = this.state[y][x]
        this.state[y][x] = aux;
        this.passTurn();
    }
    
    /**
     * Checa se o movimento requerido é inválido
     * @param {Number} x0 
     * @param {Number} y0 
     * @param {Number} x 
     * @param {Number} y 
     */
    isInvalidMove(x0, y0, x, y) {
        const isNotEmpty = (this.state[y][x] != 0);
        
        const nextPositions = this.possibleNextPositions(x0, y0);

        const isPossibleNextPosition = nextPositions.find((pos) => pos.x == x && pos.y == y);

        return isNotEmpty || !isPossibleNextPosition;
    }

    /**
     * Checa as possíveis próximas posições da peça selecionada
     * @param {Number} x 
     * @param {Number} y 
     */
    possibleNextPositions (x, y) {
        const piece = this.getPositionValue(x, y);
        let hasEat = false;
        const cMod = piece == this.BLACK ? 1 : -1;

        //O código abaixo lida com o cálculo para perceber: se tem como comer alguma peça, 
        //é obrigatorio ao jogador comer aquela peça (ele nao pode ir pra outra posicao possivel)
        let nextPositions = [-1, +1].map(rMod => {
            let curr = this.getPositionValue(x + rMod, y + cMod);
            if (curr === 0) {
                return ({ x: x + rMod, y: y + cMod, eat: false});
            } else if (curr != piece && this.getPositionValue(x + 2 * rMod, y + 2 * cMod) == 0) {
                hasEat = true;
                
                return ({ x: x + 2 * rMod, y: y + 2 * cMod, eat: true });
            }
        })
        return nextPositions.filter(pos => pos && (!hasEat || pos.eat));
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
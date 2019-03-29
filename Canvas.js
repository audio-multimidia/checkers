class Canvas {

    constructor(canvas, game, config) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.game = game;
        this.config = config;

        this.renderPieces = this.renderPieces.bind(this);
    }

    /**
     * Chamado apenas uma vez no main.js, renderiza o tabuleiro.
     */
    renderTable () {
        const { squareWidth, squareHeight, colorOne, colorTwo, x, y } = this.config;

        this.canvas.width = squareWidth * x;
        this.canvas.height = squareHeight * y;
        
        for(let r = 0; r < x; r++) {
            for(let c = 0; c < y; c++) {

                this.context.fillStyle = colorOne;
                
                const evenEven = (r % 2 == 0 && c % 2 == 0);
                const oddOdd = (r % 2 == 1 && c % 2 == 1);

                // Se a posicao for par, pinta apenas os quadrados pares
                // Se a posicao for impar, pinta apenas os quadrados impares.
                if (evenEven || oddOdd) {
                    this.context.fillStyle = colorTwo; 
                }

                this.context.fillRect(r * squareWidth, c * squareHeight, squareWidth, squareHeight);
            }
        }
    }

    /**
     * Renderiza as peças, baseado no estado do jogo definido em Game.js
     */
    renderPieces() {
        const table = this.game.getState();
        const { RED, BLACK } = this.game.getEnumerators();
        const {x, y, squareWidth, squareHeight} = this.config;

        for(let r = 0; r < x; r++) {
            for(let c = 0; c < y; c++) {
                const piece = table[c][r];

                this.context.beginPath();
                this.context.arc((r * squareWidth) + (squareWidth/2), (c * squareHeight) + (squareHeight/2), squareWidth/2 - 10, 0, 2 * Math.PI);
                
                if(piece == RED) {
                    this.context.fillStyle = 'rgb(219, 23, 13)';
                } else if(piece == BLACK) {
                    this.context.fillStyle = 'rgb(25, 12, 11)';
                } else {
                    continue;
                }

                this.context.fill();
            }
        }
    }

    draw () {
        this.renderPieces();
    }
}
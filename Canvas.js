class Canvas {

    constructor(canvas, game, config) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.game = game;
        this.config = config;
        this.selectedPiece = { x: -1, y: -1 }
        this.renderPieces = this.renderPieces.bind(this);
    }

    draw () {
        this.clean();
        this.renderTable();
        this.renderPieces();
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
                const piece = this.game.getPositionValue(r, c);

                this.context.lineWidth = 1;
                this.context.strokeStyle = 'black'
                
                if (piece != 0) {
                    if (piece === RED) {
                        this.context.fillStyle = 'rgb(219, 23, 13)';
                    } else {
                        this.context.fillStyle = 'rgb(25, 12, 11)';
                    }

                    if (r === this.selectedPiece.x && c == this.selectedPiece.y) {
                        this.context.lineWidth = 5;
                        this.context.strokeStyle = 'rgb(66, 134, 244)';
                        
                        const nextPositions = this.game.possibleNextPositions(r, c);

                        nextPositions.forEach((pos) => this.drawRing(pos.x, pos.y))
                    }

                    this.drawRing(r, c)
                    this.context.fill();
                }
            }
        }
    }

    drawRing(x, y) {
        const { squareWidth, squareHeight } = this.config;

        this.context.beginPath();
        this.context
            .arc((x * squareWidth) + (squareWidth/2), (y * squareHeight) + (squareHeight/2), squareWidth/2 - 10, 0, 2 * Math.PI);
        this.context.stroke();
    }

    addEventListeners() {
        this.canvas.addEventListener('mousedown', (event) => {
            const x = Math.floor(event.offsetX / this.config.squareWidth);
            const y = Math.floor(event.offsetY / this.config.squareHeight);
            
            const hasPieceSelected = this.selectedPiece.x !== -1 && this.selectedPiece.y != -1;
            if (hasPieceSelected && this.game.getPositionValue(x, y) == 0) {
                this.game.move(this.selectedPiece.x, this.selectedPiece.y, x, y)
            }

            this.setSelectedPiece(x, y)
            this.draw()
        });
    }

    setSelectedPiece(x, y) {
        this.selectedPiece = { x, y };
    }

    clean () {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
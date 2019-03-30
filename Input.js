class Input {

    constructor(canvas, game){
        this.canvas = canvas;
        this.game = game;
        
        this.onClick = this.onClick.bind(this);
        this.applyEventHandlers = this.applyEventHandlers.bind(this);
    }

    onClick(event) {
        this.canvas.selectMovePiece(event);
    }

    /**
     * Associa os eventos no browser as funcoes da classe Input
     */
    applyEventHandlers() {
        document.getElementById("game").addEventListener('click', this.onClick);
    };
}
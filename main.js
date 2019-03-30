const canvas = document.getElementById("game");
const game = new Game();

const gameConfig = {
    squareWidth: 80, //largura do quadrado do tabuleiro
    squareHeight: 80, //altura do quadrado do tabuleiro
    colorOne: `rgb(112, 60, 42)`, //cor do quadrado escuro
    colorTwo: `rgb(221, 206, 201)`, //cor do quadrado claro
    x: 8, //largura do tabuleiro
    y: 8 // altura do tabuleiro
}

const canvasObj = new Canvas(canvas, game, gameConfig);
const input = new Input(canvasObj);

canvasObj.renderTable();
canvasObj.draw();
input.applyEventHandlers();



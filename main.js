const canvas = document.getElementById("game");
const game = new Game();
const input = new Input();

const gameConfig = {
    squareWidth: 80,
    squareHeight: 80,
    colorOne: `rgb(112, 60, 42)`,
    colorTwo: `rgb(221, 206, 201)`,
    x: 8,
    y: 8
}

const canvasObj = new Canvas(canvas, game, gameConfig);

canvasObj.renderTable();
canvasObj.draw();
input.applyEventHandlers();



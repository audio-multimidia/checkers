const canvas = document.getElementById("game");
const game = new Game()

const canvasObj = new Canvas(canvas, game, {
    squareWidth: 80,
    squareHeight: 80,
    colorOne: `rgb(112, 60, 42)`,
    colorTwo: `rgb(221, 206, 201)`,
    x: 8,
    y: 8
});

canvasObj.renderTable();
canvasObj.draw();




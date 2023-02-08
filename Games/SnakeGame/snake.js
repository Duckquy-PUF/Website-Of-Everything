// board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

//snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;


// main
var gameOver = false;

window.onload = function() { // on start
    board = document.getElementById("board"); // set the board = index.html board so we can edit it
    board.height = rows * blockSize; // the board height = 20 pixels x 25 pixels
    board.width = cols * blockSize; // the board width = 20 pixels X 25 pixels
    context = board.getContext("2d"); // the context is in the board and it is 2d

    placeFood(); // place the food in a random place
    document.addEventListener("keyup", changeDirection); // when a key is released, we change the direction of the snake
    setInterval(update, 1000/10); // every 100 milliseconds we update
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black"; // set the colour to black
    context.fillRect(0, 0, board.width, board.height); // fill in a black square in the board

    context.fillStyle="red"; // set the colour to red
    context.fillRect(foodX, foodY, blockSize, blockSize); // fill in a random

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";

    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("You crashed into a wall!");
        window.location.reload();
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("You crashed into yourself!");
            window.location.reload();
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}


function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
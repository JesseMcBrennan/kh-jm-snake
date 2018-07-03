const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const drawBackground = require('./background.js');

let game;
 
game = new Game();
game.snake.isGameOver = true;

drawStart();
function drawStart() {
  if (game.snake.isGameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.startGame(ctx);
    requestAnimationFrame(drawStart);
  }
}

function gameLoop() {
  if (game.snake.isGameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  } else {
    window.setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(ctx);
      game.animate(ctx);
      game.eatFood(ctx);
      game.gameScore(ctx);
      game.snake.collideWithWall(ctx);
      game.snake.collideWithSelf(ctx);
      requestAnimationFrame(gameLoop);
    }, 100);
  }
}

window.addEventListener('keydown', userInput);
canvas.addEventListener('click', userClick);

const keyboard = {
  38: () => game.snake.direction !== 'down' ? game.snake.direction = 'up' : game.snake.direction,
  40: () => game.snake.direction !== 'up' ? game.snake.direction = 'down' : game.snake.direction,
  37: () => game.snake.direction !== 'right' ? game.snake.direction = 'left' : game.snake.direction,
  39: () => game.snake.direction !== 'left' ? game.snake.direction = 'right' : game.snake.direction
};

//change key numbers to 'strings'

function userInput(event) {
  if (keyboard[event.keyCode]) {
    keyboard[event.keyCode]();
  }
}

function userClick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.snake.isGameOver = false;
  game.initializeGame();
  gameLoop();
  console.log(game.snake.isGameOver);  
}

requestAnimationFrame(gameLoop);




 




const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const drawBackground = require('./background.js');

let game;

// game.startGame();
 
game = new Game();
game.initializeGame();

function userClick() {
  console.log('initializeGame')
}

ctx.fillStyle = 'rgb(200, 0, 0)';

function gameLoop() {
  if (game.snake.isGameOver === true) {
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
  38: () => game.snake.direction !== 'down' ? game.snake.direction = 'up': game.snake.direction,
  40: () => game.snake.direction !== 'up' ? game.snake.direction = 'down': game.snake.direction,
  37: () => game.snake.direction !== 'right' ? game.snake.direction = 'left': game.snake.direction,
  39: () => game.snake.direction !== 'left' ? game.snake.direction = 'right': game.snake.direction
};
//change key numbers to 'strings'

function userInput(event) {
  if (keyboard[event.keyCode]) {
    keyboard[event.keyCode]();
  }
}

requestAnimationFrame(gameLoop);




 




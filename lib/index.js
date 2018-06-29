const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');

let game;

game = new Game();

ctx.fillStyle = "rgba(0, 255, 0, 1)";

function gameLoop() {
  ctx.clearRect(0,0, canvas.width, canvas.height);

  // if (game.isGameOver === true) {
  //   return
  // } else {

  game.animate(ctx)

// }


  requestAnimationFrame(gameLoop);
}


window.addEventListener('keydown', userInput);

const keyboard = {
  38: () => game.snake.steerSnake('up'),
  40: () => game.snake.steerSnake('down'),
  37: () => game.snake.steerSnake('left'),
  39: () => game.snake.steerSnake('right'),
};

  function userInput(event) {
    if(keyboard[event.keyCode]) {
      keyboard[event.keyCode]()
  }
}



requestAnimationFrame(gameLoop);




 




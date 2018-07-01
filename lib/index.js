const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const drawBackground = require('./background.js');

let game;

game = new Game();

game.initializeGame()

let isGameOver = false;

ctx.fillStyle = 'rgb(200, 0, 0)'

function gameLoop() {
  if (game.isGameOver === true) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
} else {
    window.setTimeout(function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBackground(ctx);
    game.animate(ctx)
    game.eatFood(ctx)
    game.snake.collideWithWall(ctx);
    game.snake.collideWithSelf(ctx);
    requestAnimationFrame(gameLoop);
}, 100)
  
}

}


window.addEventListener('keydown', userInput);

const keyboard = {
  38: () => game.snake.direction = 'up',
  40: () => game.snake.direction = 'down',
  37: () => game.snake.direction = 'left',
  39: () => game.snake.direction = 'right'
};

  function userInput(event) {
    if(keyboard[event.keyCode]) {
      keyboard[event.keyCode]()
  }
}



requestAnimationFrame(gameLoop);




 




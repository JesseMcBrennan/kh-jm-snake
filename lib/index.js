const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const drawBackground = require('./background.js');

let game;
 
game = new Game();
game.checkScore();
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
    game.endGame(ctx);
    return;
  } else {
    window.setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(ctx);
      game.animate(ctx);
      game.eatFood(ctx);
      gameScore(ctx);
      highScore(ctx);
      game.snake.collideWithWall(ctx);
      game.snake.collideWithSelf(ctx);
      requestAnimationFrame(gameLoop);
    }, 100);
  }
}

window.addEventListener('keydown', userInput);
canvas.addEventListener('click', userClick);

const keyboard = {
  "key38": () => game.snake.direction !== 'down' ? game.snake.direction = 'up' : undefined,
  "key40": () => game.snake.direction !== 'up' ? game.snake.direction = 'down' : undefined,
  "key37": () => game.snake.direction !== 'right' ? game.snake.direction = 'left' : undefined,
  "key39": () => game.snake.direction !== 'left' ? game.snake.direction = 'right' : undefined
};

//change key numbers to 'strings'

function userInput(event) {
  if (keyboard[`key${event.keyCode}`]) {
    keyboard[`key${event.keyCode}`]();
  }
}

function userClick() {
  if (game.snake.isGameOver === true && !game.snake.isDead === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.snake.isGameOver = false;
    game.initializeGame();
    gameLoop(); 
  } else {
    console.log('restart');
    location.reload();
  }
}

function highScore() {
    let hightScoreTxt = document.querySelector('.highScoreTxt');
    hightScoreTxt.innerText = ('High Score : ' + game.parsedScores[0]);
    console.log(game.parsedScores);
  }

function gameScore() {
    let scoreTxt = document.querySelector('.currentScore');
    scoreTxt.innerText = ('Score : ' + game.score);
  }

requestAnimationFrame(gameLoop);




 




const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
console.log(ctx)

let game;

game = new Game();

ctx.fillStyle = "rgba(0, 255, 0, 1)";



function gameLoop() {
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (game.isGameOver === true) {
    return
  } else {

  game.animate(ctx)

}

  document.querySelector)('keydown', userInput() {

  })

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);




 




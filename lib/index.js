const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js')

console.log(context)

let game;

context.fillStyle = "rgba(0, 255, 0, 1)";

var direction;



function gameLoop() {
  context.clearRect(0,0, context.width, context.height);

  if (game.isGameOver === true) {
    return
  } else {

  game.animate(game.blocks)

}


  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);



 




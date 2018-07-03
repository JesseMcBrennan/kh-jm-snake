const Food = require('./Food.js');
const Snake = require('./Snake.js');

class Game {
  constructor() {
    this.isGameOver = false;
    this.lives = 1;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(200, 0, 0)', 1);
    this.food = new Food(50, 50, 20, 20, 'rgb(255,0, 0)');
    this.direction = 'right';
    this.score = 0;
  }  

  startGame(ctx) {
    const img = new Image();
    img.src = '../assets/snakeBackground.jpg';
    ctx.drawImage(img, 0, 0, 600, 600);   
  }

  initializeGame() {
    this.snake.makeSnake();
  }

  endGame(ctx) {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.fillStyle = 'rgb(155, 188, 15)';
    ctx.fillRect( 0, 0, 600, 600);
    ctx.fillStyle = 'black';
    ctx.font = "60px Arial";
    ctx.fillText('Game Over', 150, 300);
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText('Your score was: ' + this.score, 190, 350)
  }

  highScore() {

  }

  eatFood() {
    if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
      this.score += 10;
      this.food.x = (Math.floor(Math.random() * 30) * 20);
      this.food.y = (Math.floor(Math.random() * 30) * 20);
      this.snake.addBlock();
    }
  }

  //eatFood moved to snake

  animate(ctx) {
    this.snake.drawSnake(ctx);
    this.snake.steerSnake();
    this.food.drawFood(ctx);
  }

  gameScore(ctx) {
    let scoreTxt = document.querySelector('.currentScore');
    scoreTxt.innerText = ('Score : ' + this.score);
  }
  
}
//game score 
module.exports = Game;


//   blocks.forEach(function (block2, j) {
//     if (i !== j && block.isCollidingWith(block2)) {
//       block.dx = 0;
//       block2.dx = 0;
//       isGameOver = true;
//     }
//   })
// })






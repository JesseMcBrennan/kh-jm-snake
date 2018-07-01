const Block = require('./Block.js');
const Food = require('./Food.js')
const Snake = require('./Snake.js')
const index = require('./index.js')

var isGameOver = false;

class Game {
  constructor() {
    this.isGameOver = false;
    this.lives = 1;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(200, 0, 0)', 1);
    this.food = new Food(50, 50, 20, 20, 'rgb(255,0, 0)')
    this.direction = 'right'
    this.score = 0;
}  
  initializeGame() {
    this.snake.makeSnake();
  }

  eatFood() {
    const { x, y, height, width, color } = this
    // console.log(this.food.x)
    if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
      this.score += 10;
      console.log(this.score); 
      this.food.x = (Math.floor(Math.random() * 30) * 20);
      this.food.y = (Math.floor(Math.random() * 30) * 20);
      console.log(this.food.x)
      console.log(this.food.y)
    }
  }

  animate(ctx) {
        this.snake.drawSnake(ctx)
        this.snake.steerSnake();
        this.food.drawFood(ctx)

    //   blocks.forEach(function (block2, j) {
    //     if (i !== j && block.isCollidingWith(block2)) {
    //       block.dx = 0;
    //       block2.dx = 0;
    //       isGameOver = true;
    //     }
    //   })
    // })
  }


  gameScore(ctx) {
  ctx.font = "27px Arial";
  ctx.fillStyle = 'black';
  ctx.fillText('Score: ' + this.score, 15, 20);


  }
}

module.exports = Game;






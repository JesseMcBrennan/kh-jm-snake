const Block = require('./Block.js');
const Food = require('./Food.js')
const Snake = require('./Snake.js')
const index = require('./index.js')

var isGameOver = false;

class Game {
  constructor() {
    this.lives = 3;
    this.block = new Block();
    this.snake = new Snake(50, 50, 20, 20, 'rgb(200, 0, 0)', 1)
    this.food = new Food(50, 50, 20, 20, 'rgb(0, 200, 0)')
}

  animate(ctx) {
        // this.snake.drawSnake(ctx)
        this.snake.makeSnake(ctx);  
        // this.snake.moveSnake();
        this.food.drawFood(ctx)
    // blocks.forEach(function (block, i) {
    //   block.draw(ctx)
    //   snake.draw()
    //   block.move();

    //   blocks.forEach(function (block2, j) {
    //     if (i !== j && block.isCollidingWith(block2)) {
    //       block.dx = 0;
    //       block2.dx = 0;
    //       isGameOver = true;
    //     }
    //   })
    // })
  }
}

module.exports = Game;






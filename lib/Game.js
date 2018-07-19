const Food = require('./Food.js');
const Snake = require('./Snake.js');

var scores = [0];

class Game {
  constructor() {
    this.isGameOver = false;
    this.isDead = false;
    this.lives = 1;
    this.food = new Food(50, 50, 20, 20, '#000000');
    this.snake = new Snake(50, 50, 20, 20, '#000000', 1);
    this.direction = 'right';
    this.score = 0;
    this.parsedScores = [];
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
    ctx.font = "60px Nokian";
    ctx.fillText('Game Over', 130, 260);
    ctx.fillStyle = 'black';
    ctx.font = "30px Nokian";
    ctx.fillText('Your score was: ' + this.score, 160, 320);    
    ctx.fillStyle = 'black thin';
    ctx.font = "20px Nokian";
    ctx.fillText('Touch the screen to restart', 155, 560);
    this.compareScores();
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

  checkScore() {
    if (localStorage.getItem('scores')) {
      this.retrieveFromLocalStorage();
    } else {
      this.addToLocalStorage();
    }
  }

  compareScores(parsedScores) {
    let currentScore = this.score;

    for (let i = this.parsedScores.length - 1; i >= 0; i--) {
      if (currentScore > this.parsedScores[i] && i === 0) {
        this.updateLocalStorage(i, currentScore, parsedScores);
      } else if (currentScore > this.parsedScores[i] && currentScore < parsedScores[i - 1]) { 
        this.updateLocalStorage(i, currentScore, parsedScores);
      }
    }    
  }

  addToLocalStorage() {
    let currentScore = scores;
    let stringifiedcurrentScore = JSON.stringify(currentScore);

    localStorage.setItem('scores', stringifiedcurrentScore);
    this.retrieveFromLocalStorage();
  }

  retrieveFromLocalStorage() {
    let retrievedScores = localStorage.getItem('scores');

    this.parsedScores = JSON.parse(retrievedScores);
    this.compareScores(this.parsedScores);
  }

  updateLocalStorage(i, currentScore, parsedScores) {
    this.parsedScores.splice(i, 0, currentScore);
    this.parsedScores.pop(); 
    let stringifiedHighScores = JSON.stringify(this.parsedScores);
    
    localStorage.setItem('scores', stringifiedHighScores);
    this.retrieveFromLocalStorage();
  }

}

module.exports = Game;








const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Snake = require('../lib/Snake.js');
const Food = require('../lib/Food.js');
const Block = require('../lib/Block.js');

describe('Game',() => {
  let game;
  let snake;
  let food;
  beforeEach(() => {
    game = new Game(false, false, 1, food = new Block(50, 50, 20, 20, '#000000'), snake = new Snake(50, 50, 20, 20, '#000000', 1),
          'right', 0, [])
  })
  it('should exist',() => {
    expect(game).to.exist;
    expect(game).to.be.an.instanceOf(Game);
  })
  
  it('should set instance properties', () => {
    let food = new Block(50 , 50, 20, 20, '#000000')


    const actualState = {
      gameOver: false,
      isDead: false,
      isGameOver: false,
      lives: 1,
      food: new Block(50, 50, 20, 20, '#000000'),
      snake: new Snake(50, 50, 20, 20, '#000000',0),
      direction: 'right',
      score: 0,
      parsedScores: [],
    }
    
    const expectedState = {
      gameOver: false,
      isDead: false,
      isGameOver: false,
      lives: 1,
      food: new Block(50, 50, 20, 20, '#000000'),
      snake: new Snake(50, 50, 20, 20, '#000000',0),
      direction: 'right',
      score: 0,
      parsedScores: [],
    }
    
    expect(actualState).to.deep.equal(expectedState);
  })

  it('should increase the score by 10 when the snake eats food', () => {
    const snake = new Snake()

    const eatFood = game.eatFood(food)

    const actualState = game.score;
    const expectedState = 10;

    expect(actualState).to.deep.equal(expectedState);
  })

})







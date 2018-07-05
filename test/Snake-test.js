const { expect } = require('chai');
const Snake = require('../lib/Snake.js');

describe('Snake', () => {
  let snake;

  beforeEach(() => {
    snake = new Snake(50, 50, 10, 10, 'rgb(200, 0, 0)', 1)
});

  it('should exist', () => {
    expect(snake).to.exist;
    expect(snake).to.be.an.instanceOf(Snake);
  })

  it('Should set instance properties', () => {
    expect(snake).to.deep.equal(snake, {
      x:50,
      y:50,
      height: 20,
      width: 20,
      color: 'green',
    })
  })

  it('Should be able to make the first part of the snake', () => {
    snake.makeSnake();

    const expectedState = 4;
    const actualState = snake.body.length;

    expect(actualState).equal(expectedState);
  })

  it('should be able to move left', () => {
    snake.makeSnake();
    const newTail = snake.body.shift();
    snake.direction = ('left');

    const expectedState = 20;
    const actualState = newTail.x

    expect(actualState).to.equal(expectedState);
  })

  it('should be able to move left', () => {
    snake.makeSnake();
    const newTail = snake.body.shift();
    snake.direction = ('right');

    const expectedState = 20;
    const actualState = newTail.x

    expect(actualState).to.equal(expectedState);
  })

  it('should be able to move up', () => {
    snake.makeSnake();
    const newTail = snake.body[snake.body.length -1]
    snake.direction = ('up');

    const expectedState = 20;
    const actualState = newTail.y

    expect(actualState).to.equal(expectedState);
  })

  it('should be able to move down', () => {
    snake.makeSnake();
    const newTail = snake.body[snake.body.length -1]
    snake.direction = ('down');

    const expectedState = 20;
    const actualState = newTail.y

    expect(actualState).to.equal(expectedState);
  })

  it('should start witha  length of four', () => {
    snake.makeSnake()
    const expectedState = 4;
    const actualState = snake.body.length

    expect(actualState).equal(expectedState)
  })

})




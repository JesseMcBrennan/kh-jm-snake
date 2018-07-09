const { assert } = require('chai');
const Food = require('../lib/Food.js');
const Game = require('../lib/Game.js')

describe('Food', function() {
  it('should be a function', function() {
    const food = new Food(50, 50, 10, 10, 'rgb(0, 0, 0')

    assert.isFunction(Food);
  })

  it('should have an x coordinate', function() {
    const food = new Food(50, 50, 10, 10, 'rgb(0, 0, 0')
    console.log(food.x, '-------')
    assert.equal(food.x, 40);
  })

  it('should have a y coordinate', function() {
    const food = new Food(50, 50, 10, 10, 'rgb(0, 0, 0')

    assert.equal(food.y, 50);
  })

  it('should have a height', function() {
    const food = new Food(50, 50, 20, 20, 'rgb(0, 0, 0')

    assert.equal(food.height, 20);
  })

  it('should have a width', function() {
    const food = new Food(50, 50, 20, 20, 'rgb(0, 0, 0')

    assert.equal(food.width, 20);
  })

  it('should instantiate with a random x and y coordinate within the canvas', () => {
    const food = new Food(50, 50, 20, 20, 'rgb(0, 0, 0' )

    assert.equal(food.x, < 600)
    assert.equal(food.y, < 600)
  }
})

describe('should move when collision with snake occurs', function() {
    const food = new Food(50, 50, 20, 20, 'rgb(0, 0, 0')

  it('should be a function', function () {
    const food1 = new Food(50, 50, 20, 20, 'rgb(0, 0, 0')


    Game.eatFood() 

    assert.isFunction(Food.moveFood)
  })
})

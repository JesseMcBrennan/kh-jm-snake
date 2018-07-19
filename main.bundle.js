/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Block(x, y) {
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
    var color = arguments[4];
    var dx = arguments[5];
    var dy = arguments[6];

    _classCallCheck(this, Block);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(Block, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return !(this.x + this.width < object.x || this.y + this.height < object.y || this.x > object.x + object.width || this.y > object.y + object.height);
    }
  }, {
    key: "drawBlock",
    value: function drawBlock(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, height, width);
      return this;
    }
  }]);

  return Block;
}();

/***/ }),

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");

var Food = function (_Block) {
  _inherits(Food, _Block);

  function Food(x, y, height, width, color) {
    _classCallCheck(this, Food);

    var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, height, width, color));

    _this.x = Math.floor(Math.random() * 30) * 20;
    _this.y = Math.floor(Math.random() * 30) * 20;
    _this.height = height;
    _this.width = width;
    _this.color = color;
    return _this;
  }

  _createClass(Food, [{
    key: 'drawFood',
    value: function drawFood(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, height, width);
      return this;
    }
  }]);

  return Food;
}(Block);

module.exports = Food;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = __webpack_require__(/*! ./Food.js */ "./lib/Food.js");
var Snake = __webpack_require__(/*! ./Snake.js */ "./lib/Snake.js");

var scores = [0];

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.isGameOver = false;
    this.isDead = false;
    this.lives = 1;
    this.food = new Food(50, 50, 20, 20, '#000000');
    this.snake = new Snake(50, 50, 20, 20, '#000000', 1);
    this.direction = 'right';
    this.score = 0;
    this.parsedScores = [];
  }

  _createClass(Game, [{
    key: 'startGame',
    value: function startGame(ctx) {
      var img = new Image();

      img.src = '../assets/snakeBackground.jpg';
      ctx.drawImage(img, 0, 0, 600, 600);
    }
  }, {
    key: 'initializeGame',
    value: function initializeGame() {
      this.snake.makeSnake();
    }
  }, {
    key: 'endGame',
    value: function endGame(ctx) {
      ctx.clearRect(0, 0, ctx.width, ctx.height);
      ctx.fillStyle = 'rgb(155, 188, 15)';
      ctx.fillRect(0, 0, 600, 600);
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
  }, {
    key: 'eatFood',
    value: function eatFood() {
      if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
        this.score += 10;
        this.food.x = Math.floor(Math.random() * 30) * 20;
        this.food.y = Math.floor(Math.random() * 30) * 20;
        this.snake.addBlock();
      }
    }

    //eatFood moved to snake

  }, {
    key: 'animate',
    value: function animate(ctx) {
      this.snake.drawSnake(ctx);
      this.snake.steerSnake();
      this.food.drawFood(ctx);
    }
  }, {
    key: 'checkScore',
    value: function checkScore() {
      if (localStorage.getItem('scores')) {
        this.retrieveFromLocalStorage();
      } else {
        this.addToLocalStorage();
      }
    }
  }, {
    key: 'compareScores',
    value: function compareScores(parsedScores) {
      var currentScore = this.score;

      for (var i = this.parsedScores.length - 1; i >= 0; i--) {
        if (currentScore > this.parsedScores[i] && i === 0) {
          this.updateLocalStorage(i, currentScore, parsedScores);
        } else if (currentScore > this.parsedScores[i] && currentScore < parsedScores[i - 1]) {
          this.updateLocalStorage(i, currentScore, parsedScores);
        }
      }
    }
  }, {
    key: 'addToLocalStorage',
    value: function addToLocalStorage() {
      var currentScore = scores;
      var stringifiedcurrentScore = JSON.stringify(currentScore);

      localStorage.setItem('scores', stringifiedcurrentScore);
      this.retrieveFromLocalStorage();
    }
  }, {
    key: 'retrieveFromLocalStorage',
    value: function retrieveFromLocalStorage() {
      var retrievedScores = localStorage.getItem('scores');

      this.parsedScores = JSON.parse(retrievedScores);
      this.compareScores(this.parsedScores);
    }
  }, {
    key: 'updateLocalStorage',
    value: function updateLocalStorage(i, currentScore, parsedScores) {
      this.parsedScores.splice(i, 0, currentScore);
      this.parsedScores.pop();
      var stringifiedHighScores = JSON.stringify(this.parsedScores);

      localStorage.setItem('scores', stringifiedHighScores);
      this.retrieveFromLocalStorage();
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block.js */ "./lib/Block.js");

var Snake = function () {
  function Snake(x, y, height, width, color, dx, dy, dxv, dyv, keyCode, direction) {
    _classCallCheck(this, Snake);

    this.gameOver = false;
    this.head = null;
    this.body = [];
    this.tail = this.body[0];
    this.direction = 'right';
    this.block = new Block(50, 50, 20, 20, '#000000', 1);
  }

  _createClass(Snake, [{
    key: 'makeSnake',
    value: function makeSnake() {
      // for (let i = 20; i < 100; i += 20) {
      for (var i = 1; i <= 5; i++) {
        var block = new Block(i * 20, 20);

        this.body.push(block);
      }
      return this;
    }
  }, {
    key: 'drawSnake',
    value: function drawSnake(ctx) {
      this.body.forEach(function (block) {
        return block.drawBlock(ctx);
      });
    }
  }, {
    key: 'addBlock',
    value: function addBlock() {
      var newTail = this.tail;

      switch (this.oneDirection) {
        case 'up':
          y = newTail.y - 20;
          break;
        case 'down':
          y = newTail.y + 20;
          break;
        case 'left':
          x = newTail.x - 20;
          break;
        case 'right':
          x = newTail.x + 20;
          break;
      }

      var newBlock = new Block(newTail.x, newTail.y, 20, 20);

      this.body.unshift(newBlock);
      return this;
    }
  }, {
    key: 'collideWithWall',
    value: function collideWithWall() {
      if (this.head.x + 20 > 600 || this.head.y + 20 > 600) {
        this.isGameOver = true;
        this.isDead = true;
      } else if (this.head.x < 0 || this.head.y < 0) {
        this.isGameOver = true;
        this.isDead = true;
      }
    }
  }, {
    key: 'collideWithSelf',
    value: function collideWithSelf() {
      for (var i = 0; i < this.body.length - 2; i++) {
        // if (this.head.isCollidingWith(this.body[i])) {
        if (this.head.x == this.body[i].x && this.head.y == this.body[i].y) {

          this.isGameOver = true;
          this.isDead = true;
        }
      }
    }
  }, {
    key: 'steerSnake',
    value: function steerSnake() {
      this.tail = this.body.shift();
      this.head = this.body[this.body.length - 1];

      switch (this.direction) {
        case 'up':
          this.tail.y = this.head.y - 20;
          this.tail.x = this.head.x;
          break;
        case 'down':
          this.tail.x = this.head.x;
          this.tail.y = this.head.y + 20;
          break;
        case 'left':
          this.tail.x = this.head.x - 20;
          this.tail.y = this.head.y;
          break;
        case 'right':
          this.tail.y = this.head.y;
          this.tail.x = this.head.x + 20;
          break;
      }

      this.body.push(this.tail);
      return this;
    }
  }]);

  return Snake;
}();

module.exports = Snake;

/***/ }),

/***/ "./lib/background.js":
/*!***************************!*\
  !*** ./lib/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bw = 600;
var bh = 600;
var p = 0;

var drawBackground = function drawBackground(ctx) {
  for (var x = 0; x <= bw; x += 20) {
    ctx.moveTo(0.5 + x + p, p);
    ctx.lineTo(0.5 + x + p, bh + p);
  }

  for (var _x = 0; _x <= bh; _x += 20) {
    ctx.moveTo(p, 0.5 + _x + p);
    ctx.lineTo(bw + p, 0.5 + _x + p);
  }

  ctx.strokeStyle = "rgb(120, 120, 120)";
  ctx.stroke();
};

module.exports = drawBackground;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var drawBackground = __webpack_require__(/*! ./background.js */ "./lib/background.js");

var game = void 0;

game = new Game();
game.checkScore();
game.snake.isGameOver = true;

drawStart();
function drawStart() {
  highScore(ctx);
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
    window.setTimeout(function () {
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

var keyboard = {
  'key38': function key38() {
    return game.snake.direction !== 'down' ? game.snake.direction = 'up' : game.snake.direction;
  },
  'key40': function key40() {
    return game.snake.direction !== 'up' ? game.snake.direction = 'down' : game.snake.direction;
  },
  'key37': function key37() {
    return game.snake.direction !== 'right' ? game.snake.direction = 'left' : game.snake.direction;
  },
  'key39': function key39() {
    return game.snake.direction !== 'left' ? game.snake.direction = 'right' : game.snake.direction;
  }
};

//change key numbers to 'strings'

function userInput(event) {
  if (keyboard['key' + event.keyCode]) {
    keyboard['key' + event.keyCode]();
  }
}

function userClick() {
  if (game.snake.isGameOver === true && !game.snake.isDead === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.snake.isGameOver = false;
    game.initializeGame();
    gameLoop();
  } else {
    location.reload();
  }
}

function highScore() {
  var hightScoreTxt = document.querySelector('.highScoreTxt');

  hightScoreTxt.innerText = 'High Score : ' + game.parsedScores[0];
}

function gameScore() {
  var scoreTxt = document.querySelector('.currentScore');

  scoreTxt.innerText = 'Score : ' + game.score;
}

requestAnimationFrame(gameLoop);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9Gb29kLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9TbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImR4IiwiZHkiLCJvYmplY3QiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkJsb2NrIiwicmVxdWlyZSIsIkZvb2QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJTbmFrZSIsInNjb3JlcyIsIkdhbWUiLCJpc0dhbWVPdmVyIiwiaXNEZWFkIiwibGl2ZXMiLCJmb29kIiwic25ha2UiLCJkaXJlY3Rpb24iLCJzY29yZSIsInBhcnNlZFNjb3JlcyIsImltZyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwibWFrZVNuYWtlIiwiY2xlYXJSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwiY29tcGFyZVNjb3JlcyIsImhlYWQiLCJhZGRCbG9jayIsImRyYXdTbmFrZSIsInN0ZWVyU25ha2UiLCJkcmF3Rm9vZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UiLCJhZGRUb0xvY2FsU3RvcmFnZSIsImN1cnJlbnRTY29yZSIsImkiLCJsZW5ndGgiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJzdHJpbmdpZmllZGN1cnJlbnRTY29yZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwicmV0cmlldmVkU2NvcmVzIiwicGFyc2UiLCJzcGxpY2UiLCJwb3AiLCJzdHJpbmdpZmllZEhpZ2hTY29yZXMiLCJkeHYiLCJkeXYiLCJrZXlDb2RlIiwiZ2FtZU92ZXIiLCJib2R5IiwidGFpbCIsImJsb2NrIiwicHVzaCIsImZvckVhY2giLCJkcmF3QmxvY2siLCJuZXdUYWlsIiwib25lRGlyZWN0aW9uIiwibmV3QmxvY2siLCJ1bnNoaWZ0Iiwic2hpZnQiLCJidyIsImJoIiwicCIsImRyYXdCYWNrZ3JvdW5kIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImNoZWNrU2NvcmUiLCJkcmF3U3RhcnQiLCJoaWdoU2NvcmUiLCJzdGFydEdhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsImVuZEdhbWUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsImVhdEZvb2QiLCJnYW1lU2NvcmUiLCJjb2xsaWRlV2l0aFdhbGwiLCJjb2xsaWRlV2l0aFNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlcklucHV0IiwidXNlckNsaWNrIiwia2V5Ym9hcmQiLCJldmVudCIsImluaXRpYWxpemVHYW1lIiwibG9jYXRpb24iLCJyZWxvYWQiLCJoaWdodFNjb3JlVHh0IiwiaW5uZXJUZXh0Iiwic2NvcmVUeHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUs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dkIsQ0FBZjs7QUFFQTJCLFdBQVNELFNBQVQsR0FBc0IsYUFBYXhCLEtBQUs1RCxLQUF4QztBQUNEOztBQUVEaUUsc0JBQXNCQyxRQUF0QixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0ID0gMjAsIHdpZHRoID0gMjAsIGNvbG9yLCBkeCwgZHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPCBvYmplY3QueCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy54ID4gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHwgXG4gICAgICB0aGlzLnkgPiBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhd0Jsb2NrKGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuIiwiY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoaGVpZ2h0LCB3aWR0aCwgY29sb3IpOyBcbiAgICB0aGlzLnggPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogMjApO1xuICAgIHRoaXMueSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfSAgICAgXG5cbiAgZHJhd0Zvb2QoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb29kOyIsImNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QuanMnKTtcbmNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZS5qcycpO1xuXG52YXIgc2NvcmVzID0gWzBdO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gMTtcbiAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCg1MCwgNTAsIDIwLCAyMCwgJyMwMDAwMDAnKTtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDUwLCA1MCwgMjAsIDIwLCAnIzAwMDAwMCcsIDEpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnBhcnNlZFNjb3JlcyA9IFtdO1xuICB9ICAgICAgIFxuXG4gIHN0YXJ0R2FtZShjdHgpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5zcmMgPSAnLi4vYXNzZXRzL3NuYWtlQmFja2dyb3VuZC5qcGcnO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCA2MDAsIDYwMCk7ICAgXG4gIH1cblxuICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICB0aGlzLnNuYWtlLm1ha2VTbmFrZSgpO1xuICB9XG5cbiAgZW5kR2FtZShjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC53aWR0aCwgY3R4LmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMTU1LCAxODgsIDE1KSc7XG4gICAgY3R4LmZpbGxSZWN0KCAwLCAwLCA2MDAsIDYwMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZvbnQgPSBcIjYwcHggTm9raWFuXCI7XG4gICAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXInLCAxMzAsIDI2MCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggTm9raWFuXCI7XG4gICAgY3R4LmZpbGxUZXh0KCdZb3VyIHNjb3JlIHdhczogJyArIHRoaXMuc2NvcmUsIDE2MCwgMzIwKTsgICAgXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayB0aGluJztcbiAgICBjdHguZm9udCA9IFwiMjBweCBOb2tpYW5cIjtcbiAgICBjdHguZmlsbFRleHQoJ1RvdWNoIHRoZSBzY3JlZW4gdG8gcmVzdGFydCcsIDE1NSwgNTYwKTtcbiAgICB0aGlzLmNvbXBhcmVTY29yZXMoKTtcbiAgfVxuXG4gIGVhdEZvb2QoKSB7XG4gICAgaWYgKHRoaXMuc25ha2UuaGVhZC54ID09PSB0aGlzLmZvb2QueCAmJiB0aGlzLnNuYWtlLmhlYWQueSA9PT0gdGhpcy5mb29kLnkpIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgICB0aGlzLmZvb2QueCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gICAgICB0aGlzLmZvb2QueSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gICAgICB0aGlzLnNuYWtlLmFkZEJsb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgLy9lYXRGb29kIG1vdmVkIHRvIHNuYWtlXG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLnNuYWtlLmRyYXdTbmFrZShjdHgpO1xuICAgIHRoaXMuc25ha2Uuc3RlZXJTbmFrZSgpO1xuICAgIHRoaXMuZm9vZC5kcmF3Rm9vZChjdHgpO1xuICB9XG5cbiAgY2hlY2tTY29yZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpKSB7XG4gICAgICB0aGlzLnJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZVNjb3JlcyhwYXJzZWRTY29yZXMpIHtcbiAgICBsZXQgY3VycmVudFNjb3JlID0gdGhpcy5zY29yZTtcblxuICAgIGZvciAobGV0IGkgPSB0aGlzLnBhcnNlZFNjb3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKGN1cnJlbnRTY29yZSA+IHRoaXMucGFyc2VkU2NvcmVzW2ldICYmIGkgPT09IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoaSwgY3VycmVudFNjb3JlLCBwYXJzZWRTY29yZXMpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2NvcmUgPiB0aGlzLnBhcnNlZFNjb3Jlc1tpXSAmJiBjdXJyZW50U2NvcmUgPCBwYXJzZWRTY29yZXNbaSAtIDFdKSB7IFxuICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZShpLCBjdXJyZW50U2NvcmUsIHBhcnNlZFNjb3Jlcyk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIGFkZFRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBjdXJyZW50U2NvcmUgPSBzY29yZXM7XG4gICAgbGV0IHN0cmluZ2lmaWVkY3VycmVudFNjb3JlID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFNjb3JlKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBzdHJpbmdpZmllZGN1cnJlbnRTY29yZSk7XG4gICAgdGhpcy5yZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgcmV0cmlldmVkU2NvcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpO1xuXG4gICAgdGhpcy5wYXJzZWRTY29yZXMgPSBKU09OLnBhcnNlKHJldHJpZXZlZFNjb3Jlcyk7XG4gICAgdGhpcy5jb21wYXJlU2NvcmVzKHRoaXMucGFyc2VkU2NvcmVzKTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShpLCBjdXJyZW50U2NvcmUsIHBhcnNlZFNjb3Jlcykge1xuICAgIHRoaXMucGFyc2VkU2NvcmVzLnNwbGljZShpLCAwLCBjdXJyZW50U2NvcmUpO1xuICAgIHRoaXMucGFyc2VkU2NvcmVzLnBvcCgpOyBcbiAgICBsZXQgc3RyaW5naWZpZWRIaWdoU2NvcmVzID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wYXJzZWRTY29yZXMpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBzdHJpbmdpZmllZEhpZ2hTY29yZXMpO1xuICAgIHRoaXMucmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cblxuXG5cblxuXG5cbiIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jay5qcycpO1xuXG5jbGFzcyBTbmFrZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHksIGR4diwgZHl2LCBrZXlDb2RlLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLmJvZHkgPSBbXTtcbiAgICB0aGlzLnRhaWwgPSB0aGlzLmJvZHlbMF07XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIHRoaXMuYmxvY2sgPSBuZXcgQmxvY2soNTAsIDUwLCAyMCwgMjAsICcjMDAwMDAwJywgMSk7XG4gIH1cblxuICBtYWtlU25ha2UoKSB7XG4gICAgLy8gZm9yIChsZXQgaSA9IDIwOyBpIDwgMTAwOyBpICs9IDIwKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBsZXQgYmxvY2sgPSBuZXcgQmxvY2soaSAqIDIwLCAyMCk7XG5cbiAgICAgIHRoaXMuYm9keS5wdXNoKGJsb2NrKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3U25ha2UoY3R4KSB7XG4gICAgdGhpcy5ib2R5LmZvckVhY2goIGJsb2NrID0+IGJsb2NrLmRyYXdCbG9jayhjdHgpICk7XG4gIH1cblxuICBhZGRCbG9jaygpIHtcbiAgICBsZXQgbmV3VGFpbCA9IHRoaXMudGFpbDtcblxuICAgIHN3aXRjaCAodGhpcy5vbmVEaXJlY3Rpb24pIHtcbiAgICBjYXNlICd1cCc6XG4gICAgICB5ID0gbmV3VGFpbC55IC0gMjA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb3duJzpcbiAgICAgIHkgPSBuZXdUYWlsLnkgKyAyMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgeCA9IG5ld1RhaWwueCAtIDIwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgeCA9IG5ld1RhaWwueCArIDIwO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IG5ld0Jsb2NrID0gbmV3IEJsb2NrKG5ld1RhaWwueCwgbmV3VGFpbC55LCAyMCwgMjApO1xuXG4gICAgdGhpcy5ib2R5LnVuc2hpZnQobmV3QmxvY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29sbGlkZVdpdGhXYWxsKCkge1xuICAgIGlmICh0aGlzLmhlYWQueCArIDIwID4gNjAwIHx8IHRoaXMuaGVhZC55ICsgMjAgPiA2MDApIHtcbiAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlYWQueCAgPCAwIHx8IHRoaXMuaGVhZC55IDwgMCkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb2xsaWRlV2l0aFNlbGYoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvZHkubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAvLyBpZiAodGhpcy5oZWFkLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmJvZHlbaV0pKSB7XG4gICAgICBpZiAodGhpcy5oZWFkLnggPT0gdGhpcy5ib2R5W2ldLnggJiYgdGhpcy5oZWFkLnkgPT0gdGhpcy5ib2R5W2ldLnkpIHtcblxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICB9ICAgIFxuICAgIH1cbiAgfVxuXG4gIHN0ZWVyU25ha2UoKSB7XG4gICAgdGhpcy50YWlsID0gdGhpcy5ib2R5LnNoaWZ0KCk7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAxXTtcblxuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICBjYXNlICd1cCc6XG4gICAgICB0aGlzLnRhaWwueSA9IHRoaXMuaGVhZC55IC0gMjA7XG4gICAgICB0aGlzLnRhaWwueCA9IHRoaXMuaGVhZC54O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6XG4gICAgICB0aGlzLnRhaWwueCA9IHRoaXMuaGVhZC54O1xuICAgICAgdGhpcy50YWlsLnkgPSB0aGlzLmhlYWQueSArIDIwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICB0aGlzLnRhaWwueCA9IHRoaXMuaGVhZC54IC0gMjA7XG4gICAgICB0aGlzLnRhaWwueSA9IHRoaXMuaGVhZC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgdGhpcy50YWlsLnkgPSB0aGlzLmhlYWQueTtcbiAgICAgIHRoaXMudGFpbC54ID0gdGhpcy5oZWFkLnggKyAyMDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuYm9keS5wdXNoKHRoaXMudGFpbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTbmFrZTtcblxuXG4iLCJsZXQgYncgPSA2MDA7XG5sZXQgYmggPSA2MDA7XG5sZXQgcCA9IDA7XG5cbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGN0eCkgPT4ge1xuICBmb3IgKGxldCB4ID0gMDsgeCA8PSBidzsgeCArPSAyMCkge1xuICAgIGN0eC5tb3ZlVG8oMC41ICsgeCArIHAsIHApO1xuICAgIGN0eC5saW5lVG8oMC41ICsgeCArIHAsIGJoICsgcCk7XG4gIH1cblxuICBmb3IgKGxldCB4ID0gMDsgeCA8PSBiaDsgeCArPSAyMCkge1xuICAgIGN0eC5tb3ZlVG8ocCwgMC41ICsgeCArIHApO1xuICAgIGN0eC5saW5lVG8oYncgKyBwLCAwLjUgKyB4ICsgcCk7XG4gIH1cblxuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYigxMjAsIDEyMCwgMTIwKVwiO1xuICBjdHguc3Ryb2tlKCk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL2JhY2tncm91bmQuanMnKTtcblxubGV0IGdhbWU7XG4gXG5nYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuY2hlY2tTY29yZSgpO1xuZ2FtZS5zbmFrZS5pc0dhbWVPdmVyID0gdHJ1ZTtcblxuZHJhd1N0YXJ0KCk7XG5mdW5jdGlvbiBkcmF3U3RhcnQoKSB7XG4gIGhpZ2hTY29yZShjdHgpO1xuICBpZiAoZ2FtZS5zbmFrZS5pc0dhbWVPdmVyKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGdhbWUuc3RhcnRHYW1lKGN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdTdGFydCk7XG4gIH0gICAgICBcbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGlmIChnYW1lLnNuYWtlLmlzR2FtZU92ZXIpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZ2FtZS5lbmRHYW1lKGN0eCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICAgIGdhbWUuYW5pbWF0ZShjdHgpO1xuICAgICAgZ2FtZS5lYXRGb29kKGN0eCk7XG4gICAgICBnYW1lU2NvcmUoY3R4KTtcbiAgICAgIGhpZ2hTY29yZShjdHgpO1xuICAgICAgZ2FtZS5zbmFrZS5jb2xsaWRlV2l0aFdhbGwoY3R4KTtcbiAgICAgIGdhbWUuc25ha2UuY29sbGlkZVdpdGhTZWxmKGN0eCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1c2VySW5wdXQpO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXNlckNsaWNrKTtcblxuY29uc3Qga2V5Ym9hcmQgPSB7XG4gICdrZXkzOCc6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSAnZG93bicgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICd1cCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbiAgJ2tleTQwJzogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09ICd1cCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdkb3duJyA6IGdhbWUuc25ha2UuZGlyZWN0aW9uLFxuICAna2V5MzcnOiAoKSA9PiBnYW1lLnNuYWtlLmRpcmVjdGlvbiAhPT0gJ3JpZ2h0JyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ2xlZnQnIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sXG4gICdrZXkzOSc6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSAnbGVmdCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdyaWdodCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvblxufTtcblxuLy9jaGFuZ2Uga2V5IG51bWJlcnMgdG8gJ3N0cmluZ3MnXG5cbmZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICBpZiAoa2V5Ym9hcmRbYGtleSR7ZXZlbnQua2V5Q29kZX1gXSkge1xuICAgIGtleWJvYXJkW2BrZXkke2V2ZW50LmtleUNvZGV9YF0oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VyQ2xpY2soKSB7XG4gIGlmIChnYW1lLnNuYWtlLmlzR2FtZU92ZXIgPT09IHRydWUgJiYgIWdhbWUuc25ha2UuaXNEZWFkID09PSB0cnVlKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGdhbWUuc25ha2UuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIGdhbWUuaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICBnYW1lTG9vcCgpOyBcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdoU2NvcmUoKSB7XG4gIGxldCBoaWdodFNjb3JlVHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hTY29yZVR4dCcpO1xuXG4gIGhpZ2h0U2NvcmVUeHQuaW5uZXJUZXh0ID0gKCdIaWdoIFNjb3JlIDogJyArIGdhbWUucGFyc2VkU2NvcmVzWzBdKTtcbn1cblxuZnVuY3Rpb24gZ2FtZVNjb3JlKCkge1xuICBsZXQgc2NvcmVUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFNjb3JlJyk7XG5cbiAgc2NvcmVUeHQuaW5uZXJUZXh0ID0gKCdTY29yZSA6ICcgKyBnYW1lLnNjb3JlKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuXG5cblxuIFxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
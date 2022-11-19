/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Background.ts":
/*!***********************************!*\
  !*** ./src/classes/Background.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./src/classes/Layer.ts");

var Background = /** @class */ (function () {
    function Background(game) {
        this.game = game;
        this.image1 = document.getElementById('layer1');
        this.image2 = document.getElementById('layer2');
        this.image3 = document.getElementById('layer3');
        this.image4 = document.getElementById('layer4');
        this.layer1 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(this.game, this.image1, 0.2);
        this.layer2 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(this.game, this.image2, 0.4);
        this.layer3 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(this.game, this.image3, 1);
        this.layer4 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(this.game, this.image4, 1.5);
        this.layers = [this.layer1, this.layer2, this.layer3];
    }
    Background.prototype.update = function () {
        this.layers.forEach(function (layer) { return layer.update(); });
    };
    Background.prototype.draw = function (context) {
        this.layers.forEach(function (layer) { return layer.draw(context); });
    };
    return Background;
}());



/***/ }),

/***/ "./src/classes/Enemy.ts":
/*!******************************!*\
  !*** ./src/classes/Enemy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Angler1": () => (/* binding */ Angler1),
/* harmony export */   "Enemy": () => (/* binding */ Enemy)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = /** @class */ (function () {
    function Enemy(game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;
        this.lives = 5;
        this.score = this.lives;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
    }
    Enemy.prototype.update = function () {
        this.x += this.speedX - this.game.speed;
        if (this.x + this.width < 0)
            this.markedForDeletion = true;
        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        }
        else {
            this.frameX = 0;
        }
    };
    Enemy.prototype.draw = function (context) {
        if (this.game.debug)
            context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, //
        this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        context.font = '20px Halvetica';
        context.fillText(this.lives.toString(), this.x, this.y);
    };
    return Enemy;
}());

var Angler1 = /** @class */ (function (_super) {
    __extends(Angler1, _super);
    function Angler1(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 228;
        _this.height = 169;
        _this.y = Math.random() * (_this.game.height * 0.9 - _this.height);
        _this.image = document.getElementById('angler1');
        _this.frameY = Math.floor(Math.random() * 3);
        return _this;
    }
    return Angler1;
}(Enemy));



/***/ }),

/***/ "./src/classes/Game.ts":
/*!*****************************!*\
  !*** ./src/classes/Game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _InputHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputHandler */ "./src/classes/InputHandler.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/classes/Player.ts");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/classes/UI.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Enemy */ "./src/classes/Enemy.ts");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Background */ "./src/classes/Background.ts");





var Game = /** @class */ (function () {
    function Game(width, height) {
        this.width = width;
        this.height = height;
        this.background = new _Background__WEBPACK_IMPORTED_MODULE_4__.Background(this);
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player(this);
        this.input = new _InputHandler__WEBPACK_IMPORTED_MODULE_0__.InputHandler(this);
        this.ui = new _UI__WEBPACK_IMPORTED_MODULE_2__.UI(this);
        this.keys = [];
        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.score = 0;
        this.winningScore = 10;
        this.gameOver = false;
        this.gameTime = 0;
        this.timeLimit = 5000;
        this.speed = 1;
        this.debug = true;
    }
    Game.prototype.update = function (deltaTime) {
        var _this = this;
        if (!this.gameOver)
            this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit)
            this.gameOver = true;
        this.background.update();
        this.background.layer4.update();
        this.player.update();
        // refill ammo
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo)
                this.ammo++;
            this.ammoTimer = 0;
        }
        else {
            this.ammoTimer += deltaTime;
        }
        this.enemies.forEach(function (enemy) {
            enemy.update();
            // collisions
            if (_this.checkCollision(_this.player, enemy)) {
                enemy.markedForDeletion = true;
            }
            _this.player.projectiles.forEach(function (projectile) {
                if (_this.checkCollision(projectile, enemy)) {
                    enemy.lives--;
                    projectile.markForDeletion = true;
                    if (enemy.lives <= 0) {
                        enemy.markedForDeletion = true;
                        if (!_this.gameOver)
                            _this.score += enemy.score;
                        if (_this.score > _this.winningScore)
                            _this.gameOver = true;
                    }
                }
            });
        });
        this.enemies = this.enemies.filter(function (enemy) { return !enemy.markedForDeletion; });
        // spawn enemies
        if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
            this.addEnemy();
            this.enemyTimer = 0;
        }
        else {
            this.enemyTimer += deltaTime;
        }
    };
    Game.prototype.draw = function (context) {
        this.background.draw(context);
        this.player.draw(context);
        this.ui.draw(context);
        this.enemies.forEach(function (enemy) {
            enemy.draw(context);
        });
        this.background.layer4.draw(context);
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Angler1(this));
    };
    Game.prototype.checkCollision = function (rect1, rect2) {
        return (rect1.x < rect2.x + rect2.width && //
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y);
    };
    return Game;
}());



/***/ }),

/***/ "./src/classes/InputHandler.ts":
/*!*************************************!*\
  !*** ./src/classes/InputHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputHandler": () => (/* binding */ InputHandler)
/* harmony export */ });
var InputHandler = /** @class */ (function () {
    function InputHandler(game) {
        var _this = this;
        this.game = game;
        window.addEventListener('keydown', function (e) {
            if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && _this.game.keys.indexOf(e.key) === -1) {
                _this.game.keys.push(e.key);
            }
            else if (e.key === ' ') {
                _this.game.player.shootTop();
            }
            else if (e.key === 'd') {
                _this.game.debug = !_this.game.debug;
            }
        });
        window.addEventListener('keyup', function (e) {
            if (_this.game.keys.indexOf(e.key) > -1) {
                _this.game.keys.splice(_this.game.keys.indexOf(e.key), 1);
            }
        });
    }
    return InputHandler;
}());



/***/ }),

/***/ "./src/classes/Layer.ts":
/*!******************************!*\
  !*** ./src/classes/Layer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer)
/* harmony export */ });
var Layer = /** @class */ (function () {
    function Layer(game, image, speedModifier) {
        this.game = game;
        this.image = image;
        this.speedModifier = speedModifier;
        this.width = 1768;
        this.height = 500;
        this.x = 0;
        this.y = 0;
    }
    Layer.prototype.update = function () {
        if (this.x <= -this.width)
            this.x = 0;
        this.x -= this.game.speed * this.speedModifier;
    };
    Layer.prototype.draw = function (context) {
        context.drawImage(this.image, this.x, this.y);
        context.drawImage(this.image, this.x + this.width, this.y);
    };
    return Layer;
}());



/***/ }),

/***/ "./src/classes/Player.ts":
/*!*******************************!*\
  !*** ./src/classes/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectile */ "./src/classes/Projectile.ts");

var Player = /** @class */ (function () {
    function Player(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
        this.speedY = 0;
        this.maxSpeed = 3;
        this.projectiles = [];
        this.image = document.getElementById('player');
    }
    Player.prototype.update = function () {
        if (this.game.keys.includes('ArrowUp'))
            this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown'))
            this.speedY = this.maxSpeed;
        else
            this.speedY = 0;
        this.y += this.speedY;
        // handle projectiles
        this.projectiles.forEach(function (projectile) {
            projectile.update();
        });
        this.projectiles = this.projectiles.filter(function (projectile) { return !projectile.markForDeletion; });
        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        }
        else {
            this.frameX = 0;
        }
    };
    Player.prototype.draw = function (context) {
        if (this.game.debug)
            context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, //
        this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        this.projectiles.forEach(function (projectile) {
            projectile.draw(context);
        });
    };
    Player.prototype.shootTop = function () {
        if (this.game.ammo > 0) {
            this.projectiles.push(new _Projectile__WEBPACK_IMPORTED_MODULE_0__.Projectile(this.game, this.x + 80, this.y + 30));
            this.game.ammo--;
        }
    };
    return Player;
}());



/***/ }),

/***/ "./src/classes/Projectile.ts":
/*!***********************************!*\
  !*** ./src/classes/Projectile.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projectile": () => (/* binding */ Projectile)
/* harmony export */ });
var Projectile = /** @class */ (function () {
    function Projectile(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 3;
        this.speed = 3;
        this.markForDeletion = false;
    }
    Projectile.prototype.update = function () {
        this.x += this.speed;
        if (this.x > this.game.width)
            this.markForDeletion = true;
    };
    Projectile.prototype.draw = function (context) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Projectile;
}());



/***/ }),

/***/ "./src/classes/UI.ts":
/*!***************************!*\
  !*** ./src/classes/UI.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
var UI = /** @class */ (function () {
    function UI(game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'white';
    }
    UI.prototype.draw = function (context) {
        context.save();
        context.fillStyle = this.color;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';
        context.font = this.fontSize + 'px ' + this.fontFamily;
        // score
        context.fillText('Score: ' + this.game.score, 20, 40);
        // ammo
        for (var i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 5 * i, 50, 3, 20);
        }
        // timer
        var formatedTime = (this.game.gameTime * 0.001).toFixed(1);
        context.fillText('Timer: ' + formatedTime, 20, 100);
        // game
        if (this.game.gameOver) {
            context.textAlign = 'center';
            var message1 = void 0;
            var message2 = void 0;
            if (this.game.score > this.game.winningScore) {
                message1 = 'YOU WIN!';
                message2 = 'Well done!';
            }
            else {
                message1 = 'GAME OVER!';
                message2 = 'Try again next time!';
            }
            context.font = '50px ' + this.fontFamily;
            context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);
            context.font = '20px ' + this.fontFamily;
            context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 40);
        }
        context.restore();
    };
    return UI;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ "./src/classes/Game.ts");

window.addEventListener('load', function () {
    // canvas setup
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 500;
    var game = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas.width, canvas.height);
    var lastTime = 0;
    // animation loop
    function animate(timeStamp) {
        var deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0VzQztBQUV0QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQzVCLGVBQWU7SUFDZixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQztJQUN2RSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXBCLElBQU0sSUFBSSxHQUFHLElBQUksK0NBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFakIsaUJBQWlCO0lBQ2pCLFNBQVMsT0FBTyxDQUFDLFNBQWlCO1FBQzlCLElBQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDdkMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvQmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9FbmVteS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9HYW1lLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0lucHV0SGFuZGxlci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9MYXllci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9VSS50cyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuL0xheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBpbWFnZTE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTI6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTM6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBsYXllcjE6IExheWVyO1xyXG4gICAgbGF5ZXIyOiBMYXllcjtcclxuICAgIGxheWVyMzogTGF5ZXI7XHJcbiAgICBsYXllcjQ6IExheWVyO1xyXG4gICAgbGF5ZXJzOiBMYXllcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyMScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXIyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjMnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2U0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyNCcpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYXllcjEgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlMSwgMC4yKTtcclxuICAgICAgICB0aGlzLmxheWVyMiA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2UyLCAwLjQpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIzID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTMsIDEpO1xyXG4gICAgICAgIHRoaXMubGF5ZXI0ID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTQsIDEuNSk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbdGhpcy5sYXllcjEsIHRoaXMubGF5ZXIyLCB0aGlzLmxheWVyM107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci51cGRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIuZHJhdyhjb250ZXh0KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgZnJhbWVZOiBudW1iZXI7XHJcbiAgICBzcGVlZFg6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgbGl2ZXM6IG51bWJlcjtcclxuICAgIHNjb3JlOiBudW1iZXI7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIC0xLjUgLSAwLjU7XHJcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSA1O1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDM3O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFggLSB0aGlzLmdhbWUuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPCAwKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc3ByaXRlIGFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZWJ1ZykgY29udGV4dC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsIC8vXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gJzIwcHggSGFsdmV0aWNhJztcclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMubGl2ZXMudG9TdHJpbmcoKSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGVyMSBleHRlbmRzIEVuZW15IHtcclxuICAgIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMjg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjk7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5nbGVyMScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tICcuL0lucHV0SGFuZGxlcic7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL1VJJztcclxuaW1wb3J0IHsgQW5nbGVyMSwgRW5lbXkgfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL0JhY2tncm91bmQnO1xyXG5cclxudHlwZSBSZWN0ID0gUGxheWVyIHwgRW5lbXkgfCBQcm9qZWN0aWxlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuICAgIHBsYXllcjogUGxheWVyO1xyXG4gICAgaW5wdXQ6IElucHV0SGFuZGxlcjtcclxuICAgIHVpOiBVSTtcclxuICAgIGtleXM6IHN0cmluZ1tdO1xyXG4gICAgZW5lbWllczogRW5lbXlbXTtcclxuICAgIGVuZW15VGltZXI6IG51bWJlcjtcclxuICAgIGVuZW15SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIGFtbW86IG51bWJlcjtcclxuICAgIG1heEFtbW86IG51bWJlcjtcclxuICAgIGFtbW9UaW1lcjogbnVtYmVyO1xyXG4gICAgYW1tb0ludGVydmFsOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgd2lubmluZ1Njb3JlOiBudW1iZXI7XHJcbiAgICBnYW1lT3ZlcjogYm9vbGVhbjtcclxuICAgIGdhbWVUaW1lOiBudW1iZXI7XHJcbiAgICB0aW1lTGltaXQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBkZWJ1ZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5hbW1vID0gMjA7XHJcbiAgICAgICAgdGhpcy5tYXhBbW1vID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbW1vVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYW1tb0ludGVydmFsID0gNTAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTA7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gNTAwMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmRlYnVnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHRoaXMuZ2FtZVRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVUaW1lID4gdGhpcy50aW1lTGltaXQpIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmxheWVyNC51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gcmVmaWxsIGFtbW9cclxuICAgICAgICBpZiAodGhpcy5hbW1vVGltZXIgPiB0aGlzLmFtbW9JbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbW1vIDwgdGhpcy5tYXhBbW1vKSB0aGlzLmFtbW8rKztcclxuICAgICAgICAgICAgdGhpcy5hbW1vVGltZXIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW1tb1RpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbnNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIGVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKHByb2plY3RpbGUsIGVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmxpdmVzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlsZS5tYXJrRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5saXZlcyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB0aGlzLnNjb3JlICs9IGVuZW15LnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMud2lubmluZ1Njb3JlKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuZW15KSA9PiAhZW5lbXkubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICAvLyBzcGF3biBlbmVtaWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lciA+IHRoaXMuZW5lbXlJbnRlcnZhbCAmJiAhdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudWkuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgZW5lbXkuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQubGF5ZXI0LmRyYXcoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEFuZ2xlcjEodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKHJlY3QxOiBSZWN0LCByZWN0MjogUmVjdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHJlY3QxLnggPCByZWN0Mi54ICsgcmVjdDIud2lkdGggJiYgLy9cclxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxyXG4gICAgICAgICAgICByZWN0MS55IDwgcmVjdDIueSArIHJlY3QyLmhlaWdodCAmJlxyXG4gICAgICAgICAgICByZWN0MS55ICsgcmVjdDEuaGVpZ2h0ID4gcmVjdDIueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoKGUua2V5ID09PSAnQXJyb3dVcCcgfHwgZS5rZXkgPT09ICdBcnJvd0Rvd24nKSAmJiB0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5rZXlzLnB1c2goZS5rZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIuc2hvb3RUb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZGVidWcgPSAhdGhpcy5nYW1lLmRlYnVnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5rZXlzLnNwbGljZSh0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBzcGVlZE1vZGlmaWVyOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIHNwZWVkTW9kaWZpZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc3BlZWRNb2RpZmllciA9IHNwZWVkTW9kaWZpZXI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDE3Njg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDA7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDw9IC10aGlzLndpZHRoKSB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLmdhbWUuc3BlZWQgKiB0aGlzLnNwZWVkTW9kaWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vUHJvamVjdGlsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBmcmFtZVg6IG51bWJlcjtcclxuICAgIGZyYW1lWTogbnVtYmVyO1xyXG4gICAgbWF4RnJhbWU6IG51bWJlcjtcclxuICAgIHNwZWVkWTogbnVtYmVyO1xyXG4gICAgbWF4U3BlZWQ6IG51bWJlcjtcclxuICAgIHByb2plY3RpbGVzOiBQcm9qZWN0aWxlW107XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTIwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTkwO1xyXG4gICAgICAgIHRoaXMueCA9IDIwO1xyXG4gICAgICAgIHRoaXMueSA9IDEwMDtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSAzNztcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5rZXlzLmluY2x1ZGVzKCdBcnJvd1VwJykpIHRoaXMuc3BlZWRZID0gLXRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93RG93bicpKSB0aGlzLnNwZWVkWSA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgcHJvamVjdGlsZXNcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdGlsZS51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gdGhpcy5wcm9qZWN0aWxlcy5maWx0ZXIoKHByb2plY3RpbGUpID0+ICFwcm9qZWN0aWxlLm1hcmtGb3JEZWxldGlvbik7XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZSBhbmltYXRpb25cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVggPCB0aGlzLm1heEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWcpIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLCAvL1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RUb3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2gobmV3IFByb2plY3RpbGUodGhpcy5nYW1lLCB0aGlzLnggKyA4MCwgdGhpcy55ICsgMzApKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFtbW8tLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIG1hcmtGb3JEZWxldGlvbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDM7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuZ2FtZS53aWR0aCkgdGhpcy5tYXJrRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAneWVsbG93JztcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAyNTtcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSAnSGVsdmV0aWNhJztcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSAyO1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDI7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5mb250RmFtaWx5O1xyXG5cclxuICAgICAgICAvLyBzY29yZVxyXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ1Njb3JlOiAnICsgdGhpcy5nYW1lLnNjb3JlLCAyMCwgNDApO1xyXG5cclxuICAgICAgICAvLyBhbW1vXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYW1tbzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMjAgKyA1ICogaSwgNTAsIDMsIDIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRpbWVyXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWRUaW1lID0gKHRoaXMuZ2FtZS5nYW1lVGltZSAqIDAuMDAxKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ1RpbWVyOiAnICsgZm9ybWF0ZWRUaW1lLCAyMCwgMTAwKTtcclxuXHJcbiAgICAgICAgLy8gZ2FtZVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UxOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlMjogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zY29yZSA+IHRoaXMuZ2FtZS53aW5uaW5nU2NvcmUpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UxID0gJ1lPVSBXSU4hJztcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UyID0gJ1dlbGwgZG9uZSEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTEgPSAnR0FNRSBPVkVSISc7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMiA9ICdUcnkgYWdhaW4gbmV4dCB0aW1lISc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICc1MHB4ICcgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobWVzc2FnZTEsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDQwKTtcclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gJzIwcHggJyArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChtZXNzYWdlMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41ICsgNDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NsYXNzZXMvSW5wdXRIYW5kbGVyJztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vY2xhc3Nlcy9Qcm9qZWN0aWxlJztcclxuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL2NsYXNzZXMvUGFydGljbGUnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NsYXNzZXMvUGxheWVyJztcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2NsYXNzZXMvRW5lbXknO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4vY2xhc3Nlcy9MYXllcic7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL2NsYXNzZXMvQmFja2dyb3VuZCc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9jbGFzc2VzL1VJJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY2xhc3Nlcy9HYW1lJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gY2FudmFzIHNldHVwXHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMScpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcclxuXHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xyXG5cclxuICAgIC8vIGFuaW1hdGlvbiBsb29wXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKHRpbWVTdGFtcDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgZ2FtZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZSgwKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
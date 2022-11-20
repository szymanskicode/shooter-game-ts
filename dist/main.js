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
/* harmony export */   "Angler2": () => (/* binding */ Angler2),
/* harmony export */   "Enemy": () => (/* binding */ Enemy),
/* harmony export */   "LuckyFish": () => (/* binding */ LuckyFish)
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
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height);
            context.font = '20px Halvetica';
            context.fillText(this.lives.toString(), this.x, this.y);
        }
        context.drawImage(this.image, //
        this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
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
        _this.lives = 2;
        _this.score = _this.lives;
        return _this;
    }
    return Angler1;
}(Enemy));

var Angler2 = /** @class */ (function (_super) {
    __extends(Angler2, _super);
    function Angler2(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 213;
        _this.height = 165;
        _this.y = Math.random() * (_this.game.height * 0.9 - _this.height);
        _this.image = document.getElementById('angler2');
        _this.frameY = Math.floor(Math.random() * 2);
        _this.lives = 3;
        _this.score = _this.lives;
        return _this;
    }
    return Angler2;
}(Enemy));

var LuckyFish = /** @class */ (function (_super) {
    __extends(LuckyFish, _super);
    function LuckyFish(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 99;
        _this.height = 95;
        _this.y = Math.random() * (_this.game.height * 0.9 - _this.height);
        _this.image = document.getElementById('lucky');
        _this.frameY = Math.floor(Math.random() * 2);
        _this.lives = 3;
        _this.score = 15;
        _this.type = 'lucky';
        return _this;
    }
    return LuckyFish;
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
        this.timeLimit = 30000;
        this.speed = 1;
        this.debug = false;
    }
    Game.prototype.update = function (deltaTime) {
        var _this = this;
        if (!this.gameOver)
            this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit)
            this.gameOver = true;
        this.background.update();
        this.background.layer4.update();
        this.player.update(deltaTime);
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
                if (enemy.type === 'lucky')
                    _this.player.enterPowerUp();
                else
                    _this.score--;
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
        var randomize = Math.random();
        if (randomize < 0.3)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Angler1(this));
        else if (randomize < 0.6)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Angler2(this));
        else
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.LuckyFish(this));
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
        this.powerUp = false;
        this.powerUpTimer = 0;
        this.powerUpLimit = 10000;
    }
    Player.prototype.update = function (deltaTime) {
        if (this.game.keys.includes('ArrowUp'))
            this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown'))
            this.speedY = this.maxSpeed;
        else
            this.speedY = 0;
        this.y += this.speedY;
        // vertical boundaries
        if (this.y > this.game.height - this.height * 0.5)
            this.y = this.game.height - this.height * 0.5;
        else if (this.y < -this.height * 0.5)
            this.y = -this.height * 0.5;
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
        // power up
        if (this.powerUp) {
            if (this.powerUpTimer > this.powerUpLimit) {
                this.powerUpTimer = 0;
                this.powerUp = false;
                this.frameY = 0;
            }
            else {
                this.powerUpTimer += deltaTime;
                this.frameY = 1;
                this.game.ammo += 0.1;
            }
        }
    };
    Player.prototype.draw = function (context) {
        if (this.game.debug)
            context.strokeRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach(function (projectile) {
            projectile.draw(context);
        });
        context.drawImage(this.image, //
        this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    };
    Player.prototype.shootTop = function () {
        if (this.game.ammo > 0) {
            this.projectiles.push(new _Projectile__WEBPACK_IMPORTED_MODULE_0__.Projectile(this.game, this.x + 80, this.y + 30));
            this.game.ammo--;
        }
        if (this.powerUp)
            this.shootBottom();
    };
    Player.prototype.shootBottom = function () {
        if (this.game.ammo > 0) {
            this.projectiles.push(new _Projectile__WEBPACK_IMPORTED_MODULE_0__.Projectile(this.game, this.x + 80, this.y + 175));
        }
    };
    Player.prototype.enterPowerUp = function () {
        this.powerUpTimer = 0;
        this.powerUp = true;
        this.game.ammo = this.game.maxAmmo;
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
        this.image = document.getElementById('projectile');
    }
    Projectile.prototype.update = function () {
        this.x += this.speed;
        if (this.x > this.game.width)
            this.markForDeletion = true;
    };
    Projectile.prototype.draw = function (context) {
        context.drawImage(this.image, this.x, this.y);
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
        this.fontFamily = 'Bangers';
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
        // timer
        var formatedTime = (this.game.gameTime * 0.001).toFixed(1);
        context.fillText('Timer: ' + formatedTime, 20, 100);
        // game over message
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
            context.font = '70px ' + this.fontFamily;
            context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = '25px ' + this.fontFamily;
            context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 20);
        }
        // ammo
        if (this.game.player.powerUp)
            context.fillStyle = '#ffffbd';
        for (var i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 5 * i, 50, 3, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9CYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0VuZW15LnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvSW5wdXRIYW5kbGVyLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0xheWVyLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1BsYXllci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1VJLnRzIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FpLWNhci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4vTGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIGltYWdlMTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlMjogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlMzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlNDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGxheWVyMTogTGF5ZXI7XHJcbiAgICBsYXllcjI6IExheWVyO1xyXG4gICAgbGF5ZXIzOiBMYXllcjtcclxuICAgIGxheWVyNDogTGF5ZXI7XHJcbiAgICBsYXllcnM6IExheWVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXIxJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltYWdlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjInKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyMycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXI0JykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxheWVyMSA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2UxLCAwLjIpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIyID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTIsIDAuNCk7XHJcbiAgICAgICAgdGhpcy5sYXllcjMgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlMywgMSk7XHJcbiAgICAgICAgdGhpcy5sYXllcjQgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlNCwgMS41KTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFt0aGlzLmxheWVyMSwgdGhpcy5sYXllcjIsIHRoaXMubGF5ZXIzXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLnVwZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5kcmF3KGNvbnRleHQpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgZnJhbWVYOiBudW1iZXI7XHJcbiAgICBmcmFtZVk6IG51bWJlcjtcclxuICAgIHNwZWVkWDogbnVtYmVyO1xyXG4gICAgbWFya2VkRm9yRGVsZXRpb246IGJvb2xlYW47XHJcbiAgICBsaXZlczogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIG1heEZyYW1lOiBudW1iZXI7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogLTEuNSAtIDAuNTtcclxuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gMzc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWCAtIHRoaXMuZ2FtZS5zcGVlZDtcclxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8IDApIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBzcHJpdGUgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZvbnQgPSAnMjBweCBIYWx2ZXRpY2EnO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMubGl2ZXMudG9TdHJpbmcoKSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSwgLy9cclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggKiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWSAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuZ2xlcjEgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIyODtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE2OTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjkgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZXIxJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAyO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGVyMiBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjEzO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY1O1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lLmhlaWdodCAqIDAuOSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlcjInKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubGl2ZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMdWNreUZpc2ggZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDk5O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gOTU7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHVja3knKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDE1O1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdsdWNreSc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9VSSc7XHJcbmltcG9ydCB7IEFuZ2xlcjEsIEFuZ2xlcjIsIEVuZW15LCBMdWNreUZpc2ggfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL0JhY2tncm91bmQnO1xyXG5cclxudHlwZSBSZWN0ID0gUGxheWVyIHwgRW5lbXkgfCBQcm9qZWN0aWxlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuICAgIHBsYXllcjogUGxheWVyO1xyXG4gICAgaW5wdXQ6IElucHV0SGFuZGxlcjtcclxuICAgIHVpOiBVSTtcclxuICAgIGtleXM6IHN0cmluZ1tdO1xyXG4gICAgZW5lbWllczogRW5lbXlbXTtcclxuICAgIGVuZW15VGltZXI6IG51bWJlcjtcclxuICAgIGVuZW15SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIGFtbW86IG51bWJlcjtcclxuICAgIG1heEFtbW86IG51bWJlcjtcclxuICAgIGFtbW9UaW1lcjogbnVtYmVyO1xyXG4gICAgYW1tb0ludGVydmFsOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgd2lubmluZ1Njb3JlOiBudW1iZXI7XHJcbiAgICBnYW1lT3ZlcjogYm9vbGVhbjtcclxuICAgIGdhbWVUaW1lOiBudW1iZXI7XHJcbiAgICB0aW1lTGltaXQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBkZWJ1ZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5hbW1vID0gMjA7XHJcbiAgICAgICAgdGhpcy5tYXhBbW1vID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbW1vVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYW1tb0ludGVydmFsID0gNTAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTA7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gMzAwMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcikgdGhpcy5nYW1lVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVRpbWUgPiB0aGlzLnRpbWVMaW1pdCkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQubGF5ZXI0LnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAvLyByZWZpbGwgYW1tb1xyXG4gICAgICAgIGlmICh0aGlzLmFtbW9UaW1lciA+IHRoaXMuYW1tb0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFtbW8gPCB0aGlzLm1heEFtbW8pIHRoaXMuYW1tbysrO1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9UaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbW1vVGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29sbGlzaW9uc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgZW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkudHlwZSA9PT0gJ2x1Y2t5JykgdGhpcy5wbGF5ZXIuZW50ZXJQb3dlclVwKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuc2NvcmUtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wcm9qZWN0aWxlcy5mb3JFYWNoKChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbihwcm9qZWN0aWxlLCBlbmVteSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteS5saXZlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpbGUubWFya0ZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXkubGl2ZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcikgdGhpcy5zY29yZSArPSBlbmVteS5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLndpbm5pbmdTY29yZSkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbmVteSkgPT4gIWVuZW15Lm1hcmtlZEZvckRlbGV0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gc3Bhd24gZW5lbWllc1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15VGltZXIgPiB0aGlzLmVuZW15SW50ZXJ2YWwgJiYgIXRoaXMuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVpLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmxheWVyNC5kcmF3KGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVuZW15KCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbWl6ZSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYgKHJhbmRvbWl6ZSA8IDAuMykgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEFuZ2xlcjEodGhpcykpO1xyXG4gICAgICAgIGVsc2UgaWYgKHJhbmRvbWl6ZSA8IDAuNikgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEFuZ2xlcjIodGhpcykpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEx1Y2t5RmlzaCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24ocmVjdDE6IFJlY3QsIHJlY3QyOiBSZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJiAvL1xyXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPiByZWN0Mi55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhhbmRsZXIge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgoZS5rZXkgPT09ICdBcnJvd1VwJyB8fCBlLmtleSA9PT0gJ0Fycm93RG93bicpICYmIHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMucHVzaChlLmtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5zaG9vdFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuZGVidWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMuc3BsaWNlKHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHNwZWVkTW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgc3BlZWRNb2RpZmllcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZE1vZGlmaWVyID0gc3BlZWRNb2RpZmllcjtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTc2ODtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwMDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPD0gLXRoaXMud2lkdGgpIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuZ2FtZS5zcGVlZCAqIHRoaXMuc3BlZWRNb2RpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi9Qcm9qZWN0aWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgZnJhbWVZOiBudW1iZXI7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG4gICAgc3BlZWRZOiBudW1iZXI7XHJcbiAgICBtYXhTcGVlZDogbnVtYmVyO1xyXG4gICAgcHJvamVjdGlsZXM6IFByb2plY3RpbGVbXTtcclxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcG93ZXJVcDogYm9vbGVhbjtcclxuICAgIHBvd2VyVXBUaW1lcjogbnVtYmVyO1xyXG4gICAgcG93ZXJVcExpbWl0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEyMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE5MDtcclxuICAgICAgICB0aGlzLnggPSAyMDtcclxuICAgICAgICB0aGlzLnkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gMzc7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucG93ZXJVcExpbWl0ID0gMTAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5rZXlzLmluY2x1ZGVzKCdBcnJvd1VwJykpIHRoaXMuc3BlZWRZID0gLXRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93RG93bicpKSB0aGlzLnNwZWVkWSA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xyXG5cclxuICAgICAgICAvLyB2ZXJ0aWNhbCBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSB0aGlzLmhlaWdodCAqIDAuNSkgdGhpcy55ID0gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICogMC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA8IC10aGlzLmhlaWdodCAqIDAuNSkgdGhpcy55ID0gLXRoaXMuaGVpZ2h0ICogMC41O1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgcHJvamVjdGlsZXNcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdGlsZS51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gdGhpcy5wcm9qZWN0aWxlcy5maWx0ZXIoKHByb2plY3RpbGUpID0+ICFwcm9qZWN0aWxlLm1hcmtGb3JEZWxldGlvbik7XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZSBhbmltYXRpb25cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVggPCB0aGlzLm1heEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcG93ZXIgdXBcclxuICAgICAgICBpZiAodGhpcy5wb3dlclVwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvd2VyVXBUaW1lciA+IHRoaXMucG93ZXJVcExpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvd2VyVXBUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcFRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hbW1vICs9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWcpIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsIC8vXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RUb3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2gobmV3IFByb2plY3RpbGUodGhpcy5nYW1lLCB0aGlzLnggKyA4MCwgdGhpcy55ICsgMzApKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFtbW8tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXJVcCkgdGhpcy5zaG9vdEJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290Qm90dG9tKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuYW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKG5ldyBQcm9qZWN0aWxlKHRoaXMuZ2FtZSwgdGhpcy54ICsgODAsIHRoaXMueSArIDE3NSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbnRlclBvd2VyVXAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucG93ZXJVcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFtbW8gPSB0aGlzLmdhbWUubWF4QW1tbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgbWFya0ZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMubWFya0ZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0aWxlJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuZ2FtZS53aWR0aCkgdGhpcy5tYXJrRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBmb250U2l6ZTogbnVtYmVyO1xyXG4gICAgZm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gMjU7XHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gJ0JhbmdlcnMnO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDI7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMjtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLmZvbnRGYW1pbHk7XHJcblxyXG4gICAgICAgIC8vIHNjb3JlXHJcbiAgICAgICAgY29udGV4dC5maWxsVGV4dCgnU2NvcmU6ICcgKyB0aGlzLmdhbWUuc2NvcmUsIDIwLCA0MCk7XHJcblxyXG4gICAgICAgIC8vIHRpbWVyXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWRUaW1lID0gKHRoaXMuZ2FtZS5nYW1lVGltZSAqIDAuMDAxKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ1RpbWVyOiAnICsgZm9ybWF0ZWRUaW1lLCAyMCwgMTAwKTtcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBvdmVyIG1lc3NhZ2VcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlMTogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTI6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc2NvcmUgPiB0aGlzLmdhbWUud2lubmluZ1Njb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMSA9ICdZT1UgV0lOISc7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMiA9ICdXZWxsIGRvbmUhJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UxID0gJ0dBTUUgT1ZFUiEnO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTIgPSAnVHJ5IGFnYWluIG5leHQgdGltZSEnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmZvbnQgPSAnNzBweCAnICsgdGhpcy5mb250RmFtaWx5O1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KG1lc3NhZ2UxLCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAyMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICcyNXB4ICcgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobWVzc2FnZTIsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSArIDIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFtbW9cclxuICAgICAgICBpZiAodGhpcy5nYW1lLnBsYXllci5wb3dlclVwKSBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmJkJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS5hbW1vOyBpKyspIHtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCgyMCArIDUgKiBpLCA1MCwgMywgMjApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NsYXNzZXMvSW5wdXRIYW5kbGVyJztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vY2xhc3Nlcy9Qcm9qZWN0aWxlJztcclxuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL2NsYXNzZXMvUGFydGljbGUnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NsYXNzZXMvUGxheWVyJztcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2NsYXNzZXMvRW5lbXknO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4vY2xhc3Nlcy9MYXllcic7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL2NsYXNzZXMvQmFja2dyb3VuZCc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9jbGFzc2VzL1VJJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY2xhc3Nlcy9HYW1lJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gY2FudmFzIHNldHVwXHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMScpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcclxuXHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xyXG5cclxuICAgIC8vIGFuaW1hdGlvbiBsb29wXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKHRpbWVTdGFtcDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgZ2FtZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZSgwKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
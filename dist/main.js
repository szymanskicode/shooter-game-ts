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
/* harmony export */   "Drone": () => (/* binding */ Drone),
/* harmony export */   "Enemy": () => (/* binding */ Enemy),
/* harmony export */   "HiveWhale": () => (/* binding */ HiveWhale),
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
        _this.y = Math.random() * (_this.game.height * 0.95 - _this.height);
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
        _this.y = Math.random() * (_this.game.height * 0.95 - _this.height);
        _this.image = document.getElementById('lucky');
        _this.frameY = Math.floor(Math.random() * 2);
        _this.lives = 3;
        _this.score = 15;
        _this.type = 'lucky';
        return _this;
    }
    return LuckyFish;
}(Enemy));

var HiveWhale = /** @class */ (function (_super) {
    __extends(HiveWhale, _super);
    function HiveWhale(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 400;
        _this.height = 227;
        _this.y = Math.random() * (_this.game.height * 0.95 - _this.height);
        _this.image = document.getElementById('hivewhale');
        _this.frameY = 0;
        _this.lives = 15;
        _this.score = _this.lives;
        _this.type = 'hive';
        _this.speedX = Math.random() * -1.2 - 0.2;
        return _this;
    }
    return HiveWhale;
}(Enemy));

var Drone = /** @class */ (function (_super) {
    __extends(Drone, _super);
    function Drone(game, x, y) {
        var _this = _super.call(this, game) || this;
        _this.width = 115;
        _this.height = 95;
        _this.x = x;
        _this.y = y;
        _this.image = document.getElementById('drone');
        _this.frameY = Math.floor(Math.random() * 2);
        _this.lives = 3;
        _this.score = _this.lives;
        _this.type = 'drone';
        _this.speedX = Math.random() * -4.2 - 0.5;
        return _this;
    }
    return Drone;
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
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Particle */ "./src/classes/Particle.ts");






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
        this.particles = [];
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
        // particles
        this.explosions.forEach(function (explosion) { return explosion.update(deltaTime); });
        this.explosions = this.explosions.filter(function (explosion) { return !explosion.markedForDeletion; });
        this.particles.forEach(function (particle) { return particle.update(); });
        this.particles = this.particles.filter(function (particle) { return !particle.markedForDeletion; });
        this.enemies.forEach(function (enemy) {
            enemy.update();
            // collisions
            if (_this.checkCollision(_this.player, enemy)) {
                enemy.markedForDeletion = true;
                // create particles on enemy destroy
                for (var i = 0; i < enemy.score; i++) {
                    _this.particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_5__.Particle(_this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                }
                if (enemy.type === 'lucky')
                    _this.player.enterPowerUp();
                else
                    _this.score--;
            }
            _this.player.projectiles.forEach(function (projectile) {
                if (_this.checkCollision(projectile, enemy)) {
                    enemy.lives--;
                    projectile.markedForDeletion = true;
                    // create particle when hit
                    _this.particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_5__.Particle(_this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                    if (enemy.lives <= 0) {
                        enemy.markedForDeletion = true;
                        if (enemy.type === 'hive') {
                            for (var i = 0; i < 5; i++) {
                                _this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Drone(_this, enemy.x + Math.random() * enemy.width, enemy.y + Math.random() * enemy.height * 0.5));
                            }
                        }
                        // create particles on enemy destroy
                        for (var i = 0; i < enemy.score; i++) {
                            _this.particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_5__.Particle(_this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                        }
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
        this.ui.draw(context);
        this.player.draw(context);
        this.particles.forEach(function (particle) { return particle.draw(context); });
        this.enemies.forEach(function (enemy) {
            enemy.draw(context);
        });
        this.explosions.forEach(function (explosion) { return explosion.draw(context); });
        this.background.layer4.draw(context);
    };
    Game.prototype.addEnemy = function () {
        var randomize = Math.random();
        if (randomize < 0.3)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Angler1(this));
        else if (randomize < 0.6)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.Angler2(this));
        else if (randomize < 0.8)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.HiveWhale(this));
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

/***/ "./src/classes/Particle.ts":
/*!*********************************!*\
  !*** ./src/classes/Particle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
var Particle = /** @class */ (function () {
    function Particle(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('gears');
        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 3);
        this.spriteSize = 50;
        this.sizeModifier = Number((Math.random() * 0.5 + 0.5).toFixed(1));
        this.size = this.spriteSize * this.sizeModifier;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * -15;
        this.gravity = 0.5;
        this.markedForDeletion = false;
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1;
        this.bounced = 0;
        this.bottomBounceBoundary = Math.random() * 80 + 60;
    }
    Particle.prototype.update = function () {
        this.angle += this.va;
        this.speedY += this.gravity;
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.y > this.game.height + this.size || this.x < 0 - this.size)
            this.markedForDeletion = true;
        if (this.y > this.game.height - this.bottomBounceBoundary && this.bounced < 2) {
            this.bounced++;
            this.speedY *= -0.5;
        }
    };
    Particle.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, //
        this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.size * -0.5, this.size * -0.5, this.size, this.size);
        context.restore();
    };
    return Particle;
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
        this.projectiles = this.projectiles.filter(function (projectile) { return !projectile.markedForDeletion; });
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
                if (this.game.ammo > this.game.maxAmmo)
                    this.game.ammo = this.game.maxAmmo;
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
        if (this.game.ammo < this.game.maxAmmo)
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
        this.markedForDeletion = false;
        this.image = document.getElementById('projectile');
    }
    Projectile.prototype.update = function () {
        this.x += this.speed;
        if (this.x > this.game.width)
            this.markedForDeletion = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvQmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9FbmVteS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9HYW1lLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0lucHV0SGFuZGxlci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9MYXllci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9VSS50cyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuL0xheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBpbWFnZTE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTI6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTM6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpbWFnZTQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBsYXllcjE6IExheWVyO1xyXG4gICAgbGF5ZXIyOiBMYXllcjtcclxuICAgIGxheWVyMzogTGF5ZXI7XHJcbiAgICBsYXllcjQ6IExheWVyO1xyXG4gICAgbGF5ZXJzOiBMYXllcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyMScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXIyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjMnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2U0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyNCcpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYXllcjEgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlMSwgMC4yKTtcclxuICAgICAgICB0aGlzLmxheWVyMiA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2UyLCAwLjQpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIzID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTMsIDEpO1xyXG4gICAgICAgIHRoaXMubGF5ZXI0ID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTQsIDEuNSk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbdGhpcy5sYXllcjEsIHRoaXMubGF5ZXIyLCB0aGlzLmxheWVyM107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci51cGRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIuZHJhdyhjb250ZXh0KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgZnJhbWVZOiBudW1iZXI7XHJcbiAgICBzcGVlZFg6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgbGl2ZXM6IG51bWJlcjtcclxuICAgIHNjb3JlOiBudW1iZXI7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIC0xLjUgLSAwLjU7XHJcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDM3O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFggLSB0aGlzLmdhbWUuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPCAwKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc3ByaXRlIGFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gJzIwcHggSGFsdmV0aWNhJztcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dCh0aGlzLmxpdmVzLnRvU3RyaW5nKCksIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsIC8vXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmdsZXIxIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMjg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjk7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5nbGVyMScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICB0aGlzLmxpdmVzID0gMjtcclxuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5saXZlcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuZ2xlcjIgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIxMztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE2NTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjk1IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5nbGVyMicpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICB0aGlzLmxpdmVzID0gMztcclxuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5saXZlcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEx1Y2t5RmlzaCBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gOTk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA5NTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjk1IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHVja3knKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDE1O1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdsdWNreSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaXZlV2hhbGUgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIyNztcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjk1IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGl2ZXdoYWxlJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDE1O1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdoaXZlJztcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgucmFuZG9tKCkgKiAtMS4yIC0gMC4yO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvbmUgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMTU7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA5NTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9uZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICB0aGlzLmxpdmVzID0gMztcclxuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5saXZlcztcclxuICAgICAgICB0aGlzLnR5cGUgPSAnZHJvbmUnO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIC00LjIgLSAwLjU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9VSSc7XHJcbmltcG9ydCB7IEFuZ2xlcjEsIEFuZ2xlcjIsIERyb25lLCBFbmVteSwgSGl2ZVdoYWxlLCBMdWNreUZpc2ggfSBmcm9tICcuL0VuZW15JztcclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vUGFydGljbGUnO1xyXG5pbXBvcnQgeyBFeHBsb3Npb24gfSBmcm9tICcuL0V4cGxvc2lvbic7XHJcblxyXG50eXBlIFJlY3QgPSBQbGF5ZXIgfCBFbmVteSB8IFByb2plY3RpbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kO1xyXG4gICAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBpbnB1dDogSW5wdXRIYW5kbGVyO1xyXG4gICAgdWk6IFVJO1xyXG4gICAga2V5czogc3RyaW5nW107XHJcbiAgICBlbmVtaWVzOiBFbmVteVtdO1xyXG4gICAgcGFydGljbGVzOiBQYXJ0aWNsZVtdO1xyXG4gICAgZXhwbG9zaW9uczogRXhwbG9zaW9uW107XHJcbiAgICBlbmVteVRpbWVyOiBudW1iZXI7XHJcbiAgICBlbmVteUludGVydmFsOiBudW1iZXI7XHJcbiAgICBhbW1vOiBudW1iZXI7XHJcbiAgICBtYXhBbW1vOiBudW1iZXI7XHJcbiAgICBhbW1vVGltZXI6IG51bWJlcjtcclxuICAgIGFtbW9JbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIHdpbm5pbmdTY29yZTogbnVtYmVyO1xyXG4gICAgZ2FtZU92ZXI6IGJvb2xlYW47XHJcbiAgICBnYW1lVGltZTogbnVtYmVyO1xyXG4gICAgdGltZUxpbWl0OiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgZGVidWc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkodGhpcyk7XHJcbiAgICAgICAgdGhpcy5rZXlzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5hbW1vID0gMjA7XHJcbiAgICAgICAgdGhpcy5tYXhBbW1vID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbW1vVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYW1tb0ludGVydmFsID0gNTAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTA7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gMzAwMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcikgdGhpcy5nYW1lVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVRpbWUgPiB0aGlzLnRpbWVMaW1pdCkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQubGF5ZXI0LnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAvLyByZWZpbGwgYW1tb1xyXG4gICAgICAgIGlmICh0aGlzLmFtbW9UaW1lciA+IHRoaXMuYW1tb0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFtbW8gPCB0aGlzLm1heEFtbW8pIHRoaXMuYW1tbysrO1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9UaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbW1vVGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGFydGljbGVzXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zLmZvckVhY2goKGV4cGxvc2lvbikgPT4gZXhwbG9zaW9uLnVwZGF0ZShkZWx0YVRpbWUpKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSB0aGlzLmV4cGxvc2lvbnMuZmlsdGVyKChleHBsb3Npb24pID0+ICFleHBsb3Npb24ubWFya2VkRm9yRGVsZXRpb24pO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiBwYXJ0aWNsZS51cGRhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIoKHBhcnRpY2xlKSA9PiAhcGFydGljbGUubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgZW5lbXkudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb2xsaXNpb25zXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCBlbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15Lm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcGFydGljbGVzIG9uIGVuZW15IGRlc3Ryb3lcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXkuc2NvcmU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMsIGVuZW15LnggKyBlbmVteS53aWR0aCAqIDAuNSwgZW5lbXkueSArIGVuZW15LmhlaWdodCAqIDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbmVteS50eXBlID09PSAnbHVja3knKSB0aGlzLnBsYXllci5lbnRlclBvd2VyVXAoKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zY29yZS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKHByb2plY3RpbGUsIGVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmxpdmVzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlsZS5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwYXJ0aWNsZSB3aGVuIGhpdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMsIGVuZW15LnggKyBlbmVteS53aWR0aCAqIDAuNSwgZW5lbXkueSArIGVuZW15LmhlaWdodCAqIDAuNSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXkubGl2ZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXkudHlwZSA9PT0gJ2hpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBEcm9uZSh0aGlzLCBlbmVteS54ICsgTWF0aC5yYW5kb20oKSAqIGVuZW15LndpZHRoLCBlbmVteS55ICsgTWF0aC5yYW5kb20oKSAqIGVuZW15LmhlaWdodCAqIDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcGFydGljbGVzIG9uIGVuZW15IGRlc3Ryb3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteS5zY29yZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLCBlbmVteS54ICsgZW5lbXkud2lkdGggKiAwLjUsIGVuZW15LnkgKyBlbmVteS5oZWlnaHQgKiAwLjUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB0aGlzLnNjb3JlICs9IGVuZW15LnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMud2lubmluZ1Njb3JlKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuZW15KSA9PiAhZW5lbXkubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICAvLyBzcGF3biBlbmVtaWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lciA+IHRoaXMuZW5lbXlJbnRlcnZhbCAmJiAhdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVpLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4gcGFydGljbGUuZHJhdyhjb250ZXh0KSk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zLmZvckVhY2goKGV4cGxvc2lvbikgPT4gZXhwbG9zaW9uLmRyYXcoY29udGV4dCkpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5sYXllcjQuZHJhdyhjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFbmVteSgpIHtcclxuICAgICAgICBjb25zdCByYW5kb21pemUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmIChyYW5kb21pemUgPCAwLjMpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBBbmdsZXIxKHRoaXMpKTtcclxuICAgICAgICBlbHNlIGlmIChyYW5kb21pemUgPCAwLjYpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBBbmdsZXIyKHRoaXMpKTtcclxuICAgICAgICBlbHNlIGlmIChyYW5kb21pemUgPCAwLjgpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBIaXZlV2hhbGUodGhpcykpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEx1Y2t5RmlzaCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24ocmVjdDE6IFJlY3QsIHJlY3QyOiBSZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJiAvL1xyXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPiByZWN0Mi55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhhbmRsZXIge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgoZS5rZXkgPT09ICdBcnJvd1VwJyB8fCBlLmtleSA9PT0gJ0Fycm93RG93bicpICYmIHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMucHVzaChlLmtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5zaG9vdFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuZGVidWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMuc3BsaWNlKHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHNwZWVkTW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgc3BlZWRNb2RpZmllcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZE1vZGlmaWVyID0gc3BlZWRNb2RpZmllcjtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTc2ODtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwMDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPD0gLXRoaXMud2lkdGgpIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuZ2FtZS5zcGVlZCAqIHRoaXMuc3BlZWRNb2RpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBmcmFtZVg6IG51bWJlcjtcclxuICAgIGZyYW1lWTogbnVtYmVyO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBzcHJpdGVTaXplOiBudW1iZXI7XHJcbiAgICBzaXplTW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIHNwZWVkWDogbnVtYmVyO1xyXG4gICAgc3BlZWRZOiBudW1iZXI7XHJcbiAgICBncmF2aXR5OiBudW1iZXI7XHJcbiAgICBtYXJrZWRGb3JEZWxldGlvbjogYm9vbGVhbjtcclxuICAgIGFuZ2xlOiBudW1iZXI7XHJcbiAgICB2YTogbnVtYmVyO1xyXG4gICAgYm91bmNlZDogbnVtYmVyO1xyXG4gICAgYm90dG9tQm91bmNlQm91bmRhcnk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VhcnMnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICB0aGlzLnNwcml0ZVNpemUgPSA1MDtcclxuICAgICAgICB0aGlzLnNpemVNb2RpZmllciA9IE51bWJlcigoTWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNSkudG9GaXhlZCgxKSk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5zcHJpdGVTaXplICogdGhpcy5zaXplTW9kaWZpZXI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnJhbmRvbSgpICogLTE1O1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy52YSA9IE1hdGgucmFuZG9tKCkgKiAwLjIgLSAwLjE7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VkID0gMDtcclxuICAgICAgICB0aGlzLmJvdHRvbUJvdW5jZUJvdW5kYXJ5ID0gTWF0aC5yYW5kb20oKSAqIDgwICsgNjA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy52YTtcclxuICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYICsgdGhpcy5nYW1lLnNwZWVkO1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmhlaWdodCArIHRoaXMuc2l6ZSB8fCB0aGlzLnggPCAwIC0gdGhpcy5zaXplKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSB0aGlzLmJvdHRvbUJvdW5jZUJvdW5kYXJ5ICYmIHRoaXMuYm91bmNlZCA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2VkKys7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIGNvbnRleHQucm90YXRlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLCAvL1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCAqIHRoaXMuc3ByaXRlU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLnNwcml0ZVNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVTaXplLFxyXG4gICAgICAgICAgICB0aGlzLnNpemUgKiAtMC41LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUgKiAtMC41LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL1Byb2plY3RpbGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgZnJhbWVYOiBudW1iZXI7XHJcbiAgICBmcmFtZVk6IG51bWJlcjtcclxuICAgIG1heEZyYW1lOiBudW1iZXI7XHJcbiAgICBzcGVlZFk6IG51bWJlcjtcclxuICAgIG1heFNwZWVkOiBudW1iZXI7XHJcbiAgICBwcm9qZWN0aWxlczogUHJvamVjdGlsZVtdO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwb3dlclVwOiBib29sZWFuO1xyXG4gICAgcG93ZXJVcFRpbWVyOiBudW1iZXI7XHJcbiAgICBwb3dlclVwTGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTIwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTkwO1xyXG4gICAgICAgIHRoaXMueCA9IDIwO1xyXG4gICAgICAgIHRoaXMueSA9IDEwMDtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSAzNztcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvd2VyVXBUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwTGltaXQgPSAxMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93VXAnKSkgdGhpcy5zcGVlZFkgPSAtdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUua2V5cy5pbmNsdWRlcygnQXJyb3dEb3duJykpIHRoaXMuc3BlZWRZID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIHRoaXMuc3BlZWRZID0gMDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsIGJvdW5kYXJpZXNcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICogMC41KSB0aGlzLnkgPSB0aGlzLmdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKiAwLjU7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy55IDwgLXRoaXMuaGVpZ2h0ICogMC41KSB0aGlzLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBwcm9qZWN0aWxlc1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSB0aGlzLnByb2plY3RpbGVzLmZpbHRlcigocHJvamVjdGlsZSkgPT4gIXByb2plY3RpbGUubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICAvLyBzcHJpdGUgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBvd2VyIHVwXHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXJVcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3dlclVwVGltZXIgPiB0aGlzLnBvd2VyVXBMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlclVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLmFtbW8gPiB0aGlzLmdhbWUubWF4QW1tbykgdGhpcy5nYW1lLmFtbW8gPSB0aGlzLmdhbWUubWF4QW1tbztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcFRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hbW1vICs9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWcpIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsIC8vXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RUb3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2gobmV3IFByb2plY3RpbGUodGhpcy5nYW1lLCB0aGlzLnggKyA4MCwgdGhpcy55ICsgMzApKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFtbW8tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXJVcCkgdGhpcy5zaG9vdEJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290Qm90dG9tKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuYW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKG5ldyBQcm9qZWN0aWxlKHRoaXMuZ2FtZSwgdGhpcy54ICsgODAsIHRoaXMueSArIDE3NSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbnRlclBvd2VyVXAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucG93ZXJVcCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vIDwgdGhpcy5nYW1lLm1heEFtbW8pIHRoaXMuZ2FtZS5hbW1vID0gdGhpcy5nYW1lLm1heEFtbW87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RpbGUnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5nYW1lLndpZHRoKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgZm9udFNpemU6IG51bWJlcjtcclxuICAgIGZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDI1O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9ICdCYW5nZXJzJztcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSAyO1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDI7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5mb250RmFtaWx5O1xyXG5cclxuICAgICAgICAvLyBzY29yZVxyXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ1Njb3JlOiAnICsgdGhpcy5nYW1lLnNjb3JlLCAyMCwgNDApO1xyXG5cclxuICAgICAgICAvLyB0aW1lclxyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkVGltZSA9ICh0aGlzLmdhbWUuZ2FtZVRpbWUgKiAwLjAwMSkudG9GaXhlZCgxKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdUaW1lcjogJyArIGZvcm1hdGVkVGltZSwgMjAsIDEwMCk7XHJcblxyXG4gICAgICAgIC8vIGdhbWUgb3ZlciBtZXNzYWdlXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTE6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UyOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNjb3JlID4gdGhpcy5nYW1lLndpbm5pbmdTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTEgPSAnWU9VIFdJTiEnO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTIgPSAnV2VsbCBkb25lISc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMSA9ICdHQU1FIE9WRVIhJztcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UyID0gJ1RyeSBhZ2FpbiBuZXh0IHRpbWUhJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gJzcwcHggJyArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChtZXNzYWdlMSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMjApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZvbnQgPSAnMjVweCAnICsgdGhpcy5mb250RmFtaWx5O1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KG1lc3NhZ2UyLCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgKyAyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbW1vXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5wbGF5ZXIucG93ZXJVcCkgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZmZiZCc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYW1tbzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMjAgKyA1ICogaSwgNTAsIDMsIDIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9jbGFzc2VzL0lucHV0SGFuZGxlcic7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL2NsYXNzZXMvUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IFBhcnRpY2xlIH0gZnJvbSAnLi9jbGFzc2VzL1BhcnRpY2xlJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9jbGFzc2VzL1BsYXllcic7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9jbGFzc2VzL0VuZW15JztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuL2NsYXNzZXMvTGF5ZXInO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9jbGFzc2VzL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vY2xhc3Nlcy9VSSc7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2NsYXNzZXMvR2FtZSc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGNhbnZhcyBzZXR1cFxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczEnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcblxyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcclxuXHJcbiAgICAvLyBhbmltYXRpb24gbG9vcFxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSh0aW1lU3RhbXA6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xyXG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuICAgIGFuaW1hdGUoMCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
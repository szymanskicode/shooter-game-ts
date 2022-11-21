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

/***/ "./src/classes/Explosion.ts":
/*!**********************************!*\
  !*** ./src/classes/Explosion.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Explosion": () => (/* binding */ Explosion),
/* harmony export */   "FireExpolsion": () => (/* binding */ FireExpolsion),
/* harmony export */   "SmokeExpolsion": () => (/* binding */ SmokeExpolsion)
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
var Explosion = /** @class */ (function () {
    function Explosion(game, x, y) {
        this.game = game;
        this.frameX = 0;
        this.spriteHeight = 200;
        this.fps = 15;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.markedForDeletion = false;
        this.maxFrame = 8;
    }
    Explosion.prototype.update = function (deltaTime) {
        if (this.timer > this.interval) {
            this.frameX++;
            this.timer = 0;
        }
        else {
            this.timer += deltaTime;
        }
        if (this.frameX > this.maxFrame)
            this.markedForDeletion = true;
    };
    Explosion.prototype.draw = function (context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    };
    return Explosion;
}());

var SmokeExpolsion = /** @class */ (function (_super) {
    __extends(SmokeExpolsion, _super);
    function SmokeExpolsion(game, x, y) {
        var _this = _super.call(this, game, x, y) || this;
        _this.image = document.getElementById('smokeExplosion');
        _this.spriteWidth = 200;
        _this.width = _this.spriteWidth;
        _this.height = _this.spriteHeight;
        _this.x = x - _this.width * 0.5;
        _this.y = y - _this.height * 0.5;
        return _this;
    }
    return SmokeExpolsion;
}(Explosion));

var FireExpolsion = /** @class */ (function (_super) {
    __extends(FireExpolsion, _super);
    function FireExpolsion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FireExpolsion;
}(Explosion));



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
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Explosion */ "./src/classes/Explosion.ts");







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
        this.explosions = [];
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
                _this.addExplosion(enemy);
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
                        _this.addExplosion(enemy);
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
    Game.prototype.addExplosion = function (enemy) {
        var randomize = Math.random();
        if (randomize < 1)
            this.explosions.push(new _Explosion__WEBPACK_IMPORTED_MODULE_6__.SmokeExpolsion(this, enemy.x, enemy.y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvRW5lbXkudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvRXhwbG9zaW9uLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvSW5wdXRIYW5kbGVyLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0xheWVyLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1BhcnRpY2xlLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1BsYXllci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1VJLnRzIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FpLWNhci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4vTGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIGltYWdlMTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlMjogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlMzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGltYWdlNDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGxheWVyMTogTGF5ZXI7XHJcbiAgICBsYXllcjI6IExheWVyO1xyXG4gICAgbGF5ZXIzOiBMYXllcjtcclxuICAgIGxheWVyNDogTGF5ZXI7XHJcbiAgICBsYXllcnM6IExheWVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXIxJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltYWdlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjInKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyMycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXI0JykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxheWVyMSA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2UxLCAwLjIpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIyID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTIsIDAuNCk7XHJcbiAgICAgICAgdGhpcy5sYXllcjMgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlMywgMSk7XHJcbiAgICAgICAgdGhpcy5sYXllcjQgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlNCwgMS41KTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFt0aGlzLmxheWVyMSwgdGhpcy5sYXllcjIsIHRoaXMubGF5ZXIzXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLnVwZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5kcmF3KGNvbnRleHQpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgZnJhbWVYOiBudW1iZXI7XHJcbiAgICBmcmFtZVk6IG51bWJlcjtcclxuICAgIHNwZWVkWDogbnVtYmVyO1xyXG4gICAgbWFya2VkRm9yRGVsZXRpb246IGJvb2xlYW47XHJcbiAgICBsaXZlczogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIG1heEZyYW1lOiBudW1iZXI7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogLTEuNSAtIDAuNTtcclxuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gMzc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWCAtIHRoaXMuZ2FtZS5zcGVlZDtcclxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8IDApIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBzcHJpdGUgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZvbnQgPSAnMjBweCBIYWx2ZXRpY2EnO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMubGl2ZXMudG9TdHJpbmcoKSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSwgLy9cclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggKiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWSAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuZ2xlcjEgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIyODtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE2OTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjkgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZXIxJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAyO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGVyMiBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjEzO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY1O1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lLmhlaWdodCAqIDAuOTUgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZXIyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTHVja3lGaXNoIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSA5OTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDk1O1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lLmhlaWdodCAqIDAuOTUgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdWNreScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICB0aGlzLmxpdmVzID0gMztcclxuICAgICAgICB0aGlzLnNjb3JlID0gMTU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJ2x1Y2t5JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpdmVXaGFsZSBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjI3O1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lLmhlaWdodCAqIDAuOTUgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXZld2hhbGUnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLmxpdmVzID0gMTU7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubGl2ZXM7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJ2hpdmUnO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIC0xLjIgLSAwLjI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9uZSBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDExNTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDk1O1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb25lJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdkcm9uZSc7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogLTQuMiAtIDAuNTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24ge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgc3ByaXRlV2lkdGg6IG51bWJlcjtcclxuICAgIHNwcml0ZUhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAxNTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gODtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVggPiB0aGlzLm1heEZyYW1lKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuZnJhbWVYICogdGhpcy5zcHJpdGVXaWR0aCwgMCwgdGhpcy5zcHJpdGVXaWR0aCwgdGhpcy5zcHJpdGVIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbW9rZUV4cG9sc2lvbiBleHRlbmRzIEV4cGxvc2lvbiB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc3ByaXRlV2lkdGg6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21va2VFeHBsb3Npb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSB4IC0gdGhpcy53aWR0aCAqIDAuNTtcclxuICAgICAgICB0aGlzLnkgPSB5IC0gdGhpcy5oZWlnaHQgKiAwLjU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlRXhwb2xzaW9uIGV4dGVuZHMgRXhwbG9zaW9uIHt9XHJcbiIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vSW5wdXRIYW5kbGVyJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xyXG5pbXBvcnQgeyBBbmdsZXIxLCBBbmdsZXIyLCBEcm9uZSwgRW5lbXksIEhpdmVXaGFsZSwgTHVja3lGaXNoIH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL1Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9CYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL1BhcnRpY2xlJztcclxuaW1wb3J0IHsgRXhwbG9zaW9uLCBTbW9rZUV4cG9sc2lvbiB9IGZyb20gJy4vRXhwbG9zaW9uJztcclxuXHJcbnR5cGUgUmVjdCA9IFBsYXllciB8IEVuZW15IHwgUHJvamVjdGlsZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XHJcbiAgICBwbGF5ZXI6IFBsYXllcjtcclxuICAgIGlucHV0OiBJbnB1dEhhbmRsZXI7XHJcbiAgICB1aTogVUk7XHJcbiAgICBrZXlzOiBzdHJpbmdbXTtcclxuICAgIGVuZW1pZXM6IEVuZW15W107XHJcbiAgICBwYXJ0aWNsZXM6IFBhcnRpY2xlW107XHJcbiAgICBleHBsb3Npb25zOiBFeHBsb3Npb25bXTtcclxuICAgIGVuZW15VGltZXI6IG51bWJlcjtcclxuICAgIGVuZW15SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIGFtbW86IG51bWJlcjtcclxuICAgIG1heEFtbW86IG51bWJlcjtcclxuICAgIGFtbW9UaW1lcjogbnVtYmVyO1xyXG4gICAgYW1tb0ludGVydmFsOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgd2lubmluZ1Njb3JlOiBudW1iZXI7XHJcbiAgICBnYW1lT3ZlcjogYm9vbGVhbjtcclxuICAgIGdhbWVUaW1lOiBudW1iZXI7XHJcbiAgICB0aW1lTGltaXQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBkZWJ1ZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gMTAwMDtcclxuICAgICAgICB0aGlzLmFtbW8gPSAyMDtcclxuICAgICAgICB0aGlzLm1heEFtbW8gPSA1MDtcclxuICAgICAgICB0aGlzLmFtbW9UaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbW1vSW50ZXJ2YWwgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy53aW5uaW5nU2NvcmUgPSAxMDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGltaXQgPSAzMDAwMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB0aGlzLmdhbWVUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lVGltZSA+IHRoaXMudGltZUxpbWl0KSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5sYXllcjQudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIC8vIHJlZmlsbCBhbW1vXHJcbiAgICAgICAgaWYgKHRoaXMuYW1tb1RpbWVyID4gdGhpcy5hbW1vSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW1tbyA8IHRoaXMubWF4QW1tbykgdGhpcy5hbW1vKys7XHJcbiAgICAgICAgICAgIHRoaXMuYW1tb1RpbWVyID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9UaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwYXJ0aWNsZXNcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMuZm9yRWFjaCgoZXhwbG9zaW9uKSA9PiBleHBsb3Npb24udXBkYXRlKGRlbHRhVGltZSkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IHRoaXMuZXhwbG9zaW9ucy5maWx0ZXIoKGV4cGxvc2lvbikgPT4gIWV4cGxvc2lvbi5tYXJrZWRGb3JEZWxldGlvbik7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHBhcnRpY2xlLnVwZGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcigocGFydGljbGUpID0+ICFwYXJ0aWNsZS5tYXJrZWRGb3JEZWxldGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbnNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIGVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeHBsb3Npb24oZW5lbXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwYXJ0aWNsZXMgb24gZW5lbXkgZGVzdHJveVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteS5zY29yZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcywgZW5lbXkueCArIGVuZW15LndpZHRoICogMC41LCBlbmVteS55ICsgZW5lbXkuaGVpZ2h0ICogMC41KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnR5cGUgPT09ICdsdWNreScpIHRoaXMucGxheWVyLmVudGVyUG93ZXJVcCgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnNjb3JlLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24ocHJvamVjdGlsZSwgZW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkubGl2ZXMtLTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHBhcnRpY2xlIHdoZW4gaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcywgZW5lbXkueCArIGVuZW15LndpZHRoICogMC41LCBlbmVteS55ICsgZW5lbXkuaGVpZ2h0ICogMC41KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5saXZlcyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeHBsb3Npb24oZW5lbXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZW15LnR5cGUgPT09ICdoaXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRHJvbmUodGhpcywgZW5lbXkueCArIE1hdGgucmFuZG9tKCkgKiBlbmVteS53aWR0aCwgZW5lbXkueSArIE1hdGgucmFuZG9tKCkgKiBlbmVteS5oZWlnaHQgKiAwLjUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHBhcnRpY2xlcyBvbiBlbmVteSBkZXN0cm95XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXkuc2NvcmU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcywgZW5lbXkueCArIGVuZW15LndpZHRoICogMC41LCBlbmVteS55ICsgZW5lbXkuaGVpZ2h0ICogMC41KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcikgdGhpcy5zY29yZSArPSBlbmVteS5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLndpbm5pbmdTY29yZSkgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbmVteSkgPT4gIWVuZW15Lm1hcmtlZEZvckRlbGV0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gc3Bhd24gZW5lbWllc1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW15VGltZXIgPiB0aGlzLmVuZW15SW50ZXJ2YWwgJiYgIXRoaXMuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51aS5kcmF3KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHBhcnRpY2xlLmRyYXcoY29udGV4dCkpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS5kcmF3KGNvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5mb3JFYWNoKChleHBsb3Npb24pID0+IGV4cGxvc2lvbi5kcmF3KGNvbnRleHQpKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQubGF5ZXI0LmRyYXcoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW5lbXkoKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9taXplID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBpZiAocmFuZG9taXplIDwgMC4zKSB0aGlzLmVuZW1pZXMucHVzaChuZXcgQW5nbGVyMSh0aGlzKSk7XHJcbiAgICAgICAgZWxzZSBpZiAocmFuZG9taXplIDwgMC42KSB0aGlzLmVuZW1pZXMucHVzaChuZXcgQW5nbGVyMih0aGlzKSk7XHJcbiAgICAgICAgZWxzZSBpZiAocmFuZG9taXplIDwgMC44KSB0aGlzLmVuZW1pZXMucHVzaChuZXcgSGl2ZVdoYWxlKHRoaXMpKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBMdWNreUZpc2godGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV4cGxvc2lvbihlbmVteTogRW5lbXkpIHtcclxuICAgICAgICBjb25zdCByYW5kb21pemUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmIChyYW5kb21pemUgPCAxKSB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgU21va2VFeHBvbHNpb24odGhpcywgZW5lbXkueCwgZW5lbXkueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKHJlY3QxOiBSZWN0LCByZWN0MjogUmVjdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHJlY3QxLnggPCByZWN0Mi54ICsgcmVjdDIud2lkdGggJiYgLy9cclxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxyXG4gICAgICAgICAgICByZWN0MS55IDwgcmVjdDIueSArIHJlY3QyLmhlaWdodCAmJlxyXG4gICAgICAgICAgICByZWN0MS55ICsgcmVjdDEuaGVpZ2h0ID4gcmVjdDIueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoKGUua2V5ID09PSAnQXJyb3dVcCcgfHwgZS5rZXkgPT09ICdBcnJvd0Rvd24nKSAmJiB0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5rZXlzLnB1c2goZS5rZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIuc2hvb3RUb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZGVidWcgPSAhdGhpcy5nYW1lLmRlYnVnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5rZXlzLnNwbGljZSh0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBzcGVlZE1vZGlmaWVyOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIHNwZWVkTW9kaWZpZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc3BlZWRNb2RpZmllciA9IHNwZWVkTW9kaWZpZXI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDE3Njg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDA7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDw9IC10aGlzLndpZHRoKSB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLmdhbWUuc3BlZWQgKiB0aGlzLnNwZWVkTW9kaWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgZnJhbWVYOiBudW1iZXI7XHJcbiAgICBmcmFtZVk6IG51bWJlcjtcclxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgc3ByaXRlU2l6ZTogbnVtYmVyO1xyXG4gICAgc2l6ZU1vZGlmaWVyOiBudW1iZXI7XHJcbiAgICBzaXplOiBudW1iZXI7XHJcbiAgICBzcGVlZFg6IG51bWJlcjtcclxuICAgIHNwZWVkWTogbnVtYmVyO1xyXG4gICAgZ3Jhdml0eTogbnVtYmVyO1xyXG4gICAgbWFya2VkRm9yRGVsZXRpb246IGJvb2xlYW47XHJcbiAgICBhbmdsZTogbnVtYmVyO1xyXG4gICAgdmE6IG51bWJlcjtcclxuICAgIGJvdW5jZWQ6IG51bWJlcjtcclxuICAgIGJvdHRvbUJvdW5jZUJvdW5kYXJ5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlYXJzJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaXplID0gNTA7XHJcbiAgICAgICAgdGhpcy5zaXplTW9kaWZpZXIgPSBOdW1iZXIoKE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjUpLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuc3ByaXRlU2l6ZSAqIHRoaXMuc2l6ZU1vZGlmaWVyO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIC0xNTtcclxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMudmEgPSBNYXRoLnJhbmRvbSgpICogMC4yIC0gMC4xO1xyXG4gICAgICAgIHRoaXMuYm91bmNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5ib3R0b21Cb3VuY2VCb3VuZGFyeSA9IE1hdGgucmFuZG9tKCkgKiA4MCArIDYwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlICs9IHRoaXMudmE7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWCArIHRoaXMuZ2FtZS5zcGVlZDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuZ2FtZS5oZWlnaHQgKyB0aGlzLnNpemUgfHwgdGhpcy54IDwgMCAtIHRoaXMuc2l6ZSkgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmdhbWUuaGVpZ2h0IC0gdGhpcy5ib3R0b21Cb3VuY2VCb3VuZGFyeSAmJiB0aGlzLmJvdW5jZWQgPCAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlZCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSwgLy9cclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggKiB0aGlzLnNwcml0ZVNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZICogdGhpcy5zcHJpdGVTaXplLFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZVNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5zaXplICogLTAuNSxcclxuICAgICAgICAgICAgdGhpcy5zaXplICogLTAuNSxcclxuICAgICAgICAgICAgdGhpcy5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi9Qcm9qZWN0aWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgZnJhbWVZOiBudW1iZXI7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG4gICAgc3BlZWRZOiBudW1iZXI7XHJcbiAgICBtYXhTcGVlZDogbnVtYmVyO1xyXG4gICAgcHJvamVjdGlsZXM6IFByb2plY3RpbGVbXTtcclxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcG93ZXJVcDogYm9vbGVhbjtcclxuICAgIHBvd2VyVXBUaW1lcjogbnVtYmVyO1xyXG4gICAgcG93ZXJVcExpbWl0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEyMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE5MDtcclxuICAgICAgICB0aGlzLnggPSAyMDtcclxuICAgICAgICB0aGlzLnkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gMzc7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucG93ZXJVcExpbWl0ID0gMTAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5rZXlzLmluY2x1ZGVzKCdBcnJvd1VwJykpIHRoaXMuc3BlZWRZID0gLXRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93RG93bicpKSB0aGlzLnNwZWVkWSA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xyXG5cclxuICAgICAgICAvLyB2ZXJ0aWNhbCBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSB0aGlzLmhlaWdodCAqIDAuNSkgdGhpcy55ID0gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICogMC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA8IC10aGlzLmhlaWdodCAqIDAuNSkgdGhpcy55ID0gLXRoaXMuaGVpZ2h0ICogMC41O1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgcHJvamVjdGlsZXNcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdGlsZS51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gdGhpcy5wcm9qZWN0aWxlcy5maWx0ZXIoKHByb2plY3RpbGUpID0+ICFwcm9qZWN0aWxlLm1hcmtlZEZvckRlbGV0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gc3ByaXRlIGFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwb3dlciB1cFxyXG4gICAgICAgIGlmICh0aGlzLnBvd2VyVXApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG93ZXJVcFRpbWVyID4gdGhpcy5wb3dlclVwTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcFRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vID4gdGhpcy5nYW1lLm1heEFtbW8pIHRoaXMuZ2FtZS5hbW1vID0gdGhpcy5nYW1lLm1heEFtbW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvd2VyVXBUaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYW1tbyArPSAwLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmRlYnVnKSBjb250ZXh0LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdGlsZS5kcmF3KGNvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLCAvL1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290VG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuYW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKG5ldyBQcm9qZWN0aWxlKHRoaXMuZ2FtZSwgdGhpcy54ICsgODAsIHRoaXMueSArIDMwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hbW1vLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvd2VyVXApIHRoaXMuc2hvb3RCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdEJvdHRvbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMucHVzaChuZXcgUHJvamVjdGlsZSh0aGlzLmdhbWUsIHRoaXMueCArIDgwLCB0aGlzLnkgKyAxNzUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJQb3dlclVwKCkge1xyXG4gICAgICAgIHRoaXMucG93ZXJVcFRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuYW1tbyA8IHRoaXMuZ2FtZS5tYXhBbW1vKSB0aGlzLmdhbWUuYW1tbyA9IHRoaXMuZ2FtZS5tYXhBbW1vO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBtYXJrZWRGb3JEZWxldGlvbjogYm9vbGVhbjtcclxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMztcclxuICAgICAgICB0aGlzLnNwZWVkID0gMztcclxuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0aWxlJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuZ2FtZS53aWR0aCkgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAyNTtcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSAnQmFuZ2Vycyc7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMjtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSAyO1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udFNpemUgKyAncHggJyArIHRoaXMuZm9udEZhbWlseTtcclxuXHJcbiAgICAgICAgLy8gc2NvcmVcclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdTY29yZTogJyArIHRoaXMuZ2FtZS5zY29yZSwgMjAsIDQwKTtcclxuXHJcbiAgICAgICAgLy8gdGltZXJcclxuICAgICAgICBjb25zdCBmb3JtYXRlZFRpbWUgPSAodGhpcy5nYW1lLmdhbWVUaW1lICogMC4wMDEpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgY29udGV4dC5maWxsVGV4dCgnVGltZXI6ICcgKyBmb3JtYXRlZFRpbWUsIDIwLCAxMDApO1xyXG5cclxuICAgICAgICAvLyBnYW1lIG92ZXIgbWVzc2FnZVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UxOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlMjogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zY29yZSA+IHRoaXMuZ2FtZS53aW5uaW5nU2NvcmUpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UxID0gJ1lPVSBXSU4hJztcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UyID0gJ1dlbGwgZG9uZSEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTEgPSAnR0FNRSBPVkVSISc7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMiA9ICdUcnkgYWdhaW4gbmV4dCB0aW1lISc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICc3MHB4ICcgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobWVzc2FnZTEsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDIwKTtcclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gJzI1cHggJyArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChtZXNzYWdlMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41ICsgMjApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYW1tb1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLnBvd2VyVXApIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmYmQnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLmFtbW87IGkrKykge1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDIwICsgNSAqIGksIDUwLCAzLCAyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vY2xhc3Nlcy9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi9jbGFzc2VzL1Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vY2xhc3Nlcy9QYXJ0aWNsZSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vY2xhc3Nlcy9QbGF5ZXInO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vY2xhc3Nlcy9FbmVteSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi9jbGFzc2VzL0xheWVyJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4vY2xhc3Nlcy9CYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL2NsYXNzZXMvVUknO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jbGFzc2VzL0dhbWUnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjYW52YXMgc2V0dXBcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBsYXN0VGltZSA9IDA7XHJcblxyXG4gICAgLy8gYW5pbWF0aW9uIGxvb3BcclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUodGltZVN0YW1wOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lU3RhbXAgLSBsYXN0VGltZTtcclxuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICBnYW1lLmRyYXcoY3R4KTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKDApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
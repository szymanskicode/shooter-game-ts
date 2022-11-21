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
        _this.lives = 5;
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
        _this.lives = 6;
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
        _this.lives = 5;
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
        _this.lives = 20;
        _this.score = 10;
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
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.fps = 30;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.markedForDeletion = false;
        this.maxFrame = 8;
    }
    Explosion.prototype.update = function (deltaTime) {
        this.x -= this.game.speed;
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
        return _this;
    }
    return SmokeExpolsion;
}(Explosion));

var FireExpolsion = /** @class */ (function (_super) {
    __extends(FireExpolsion, _super);
    function FireExpolsion(game, x, y) {
        var _this = _super.call(this, game, x, y) || this;
        _this.image = document.getElementById('fireExplosion');
        return _this;
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
        this.enemyInterval = 2000;
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 350;
        this.score = 0;
        this.winningScore = 80;
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
                else if (!_this.gameOver)
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
                        // if (this.score > this.winningScore) this.gameOver = true;
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
        else if (randomize < 0.7)
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.HiveWhale(this));
        else
            this.enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_3__.LuckyFish(this));
    };
    Game.prototype.addExplosion = function (enemy) {
        var randomize = Math.random();
        if (randomize < 0.5)
            this.explosions.push(new _Explosion__WEBPACK_IMPORTED_MODULE_6__.SmokeExpolsion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
        else
            this.explosions.push(new _Explosion__WEBPACK_IMPORTED_MODULE_6__.FireExpolsion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
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
                message2 = '30s was not enough to score 80pts, try again!';
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
        game.draw(ctx);
        game.update(deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXBCLElBQU0sSUFBSSxHQUFHLElBQUksK0NBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFakIsaUJBQWlCO0lBQ2pCLFNBQVMsT0FBTyxDQUFDLFNBQWlCO1FBQzlCLElBQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDdkMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvQmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9FbmVteS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9FeHBsb3Npb24udHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvR2FtZS50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9JbnB1dEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvUGxheWVyLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvVUkudHMiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FpLWNhci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi9MYXllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgaW1hZ2UxOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgaW1hZ2UyOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgaW1hZ2UzOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgaW1hZ2U0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgbGF5ZXIxOiBMYXllcjtcclxuICAgIGxheWVyMjogTGF5ZXI7XHJcbiAgICBsYXllcjM6IExheWVyO1xyXG4gICAgbGF5ZXI0OiBMYXllcjtcclxuICAgIGxheWVyczogTGF5ZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmltYWdlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjEnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyMicpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXIzJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltYWdlNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcjQnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubGF5ZXIxID0gbmV3IExheWVyKHRoaXMuZ2FtZSwgdGhpcy5pbWFnZTEsIDAuMik7XHJcbiAgICAgICAgdGhpcy5sYXllcjIgPSBuZXcgTGF5ZXIodGhpcy5nYW1lLCB0aGlzLmltYWdlMiwgMC40KTtcclxuICAgICAgICB0aGlzLmxheWVyMyA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2UzLCAxKTtcclxuICAgICAgICB0aGlzLmxheWVyNCA9IG5ldyBMYXllcih0aGlzLmdhbWUsIHRoaXMuaW1hZ2U0LCAxLjUpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW3RoaXMubGF5ZXIxLCB0aGlzLmxheWVyMiwgdGhpcy5sYXllcjNdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLmRyYXcoY29udGV4dCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBmcmFtZVg6IG51bWJlcjtcclxuICAgIGZyYW1lWTogbnVtYmVyO1xyXG4gICAgc3BlZWRYOiBudW1iZXI7XHJcbiAgICBtYXJrZWRGb3JEZWxldGlvbjogYm9vbGVhbjtcclxuICAgIGxpdmVzOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgbWF4RnJhbWU6IG51bWJlcjtcclxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgucmFuZG9tKCkgKiAtMS41IC0gMC41O1xyXG4gICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSAzNztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYIC0gdGhpcy5nYW1lLnNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoIDwgMCkgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZSBhbmltYXRpb25cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVggPCB0aGlzLm1heEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICcyMHB4IEhhbHZldGljYSc7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy5saXZlcy50b1N0cmluZygpLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLCAvL1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGVyMSBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjI4O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY5O1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lLmhlaWdodCAqIDAuOSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlcjEnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDU7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubGl2ZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmdsZXIyIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMTM7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjU7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45NSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlcjInKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDY7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubGl2ZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMdWNreUZpc2ggZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDk5O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gOTU7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45NSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2x1Y2t5JykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSA1O1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAxNTtcclxuICAgICAgICB0aGlzLnR5cGUgPSAnbHVja3knO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGl2ZVdoYWxlIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMjc7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWUuaGVpZ2h0ICogMC45NSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpdmV3aGFsZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAyMDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMTA7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJ2hpdmUnO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIC0xLjIgLSAwLjI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9uZSBleHRlbmRzIEVuZW15IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDExNTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDk1O1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb25lJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmxpdmVzO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdkcm9uZSc7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogLTQuMiAtIDAuNTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24ge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGZyYW1lWDogbnVtYmVyO1xyXG4gICAgc3ByaXRlV2lkdGg6IG51bWJlcjtcclxuICAgIHNwcml0ZUhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBtYXhGcmFtZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zcHJpdGVXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IHggLSB0aGlzLndpZHRoICogMC41O1xyXG4gICAgICAgIHRoaXMueSA9IHkgLSB0aGlzLmhlaWdodCAqIDAuNTtcclxuICAgICAgICB0aGlzLmZwcyA9IDMwO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSA4O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLmdhbWUuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKys7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYID4gdGhpcy5tYXhGcmFtZSkgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmZyYW1lWCAqIHRoaXMuc3ByaXRlV2lkdGgsIDAsIHRoaXMuc3ByaXRlV2lkdGgsIHRoaXMuc3ByaXRlSGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU21va2VFeHBvbHNpb24gZXh0ZW5kcyBFeHBsb3Npb24ge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHNwcml0ZVdpZHRoOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ntb2tlRXhwbG9zaW9uJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmVFeHBvbHNpb24gZXh0ZW5kcyBFeHBsb3Npb24ge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHNwcml0ZVdpZHRoOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcmVFeHBsb3Npb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vSW5wdXRIYW5kbGVyJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xyXG5pbXBvcnQgeyBBbmdsZXIxLCBBbmdsZXIyLCBEcm9uZSwgRW5lbXksIEhpdmVXaGFsZSwgTHVja3lGaXNoIH0gZnJvbSAnLi9FbmVteSc7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL1Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9CYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL1BhcnRpY2xlJztcclxuaW1wb3J0IHsgRXhwbG9zaW9uLCBGaXJlRXhwb2xzaW9uLCBTbW9rZUV4cG9sc2lvbiB9IGZyb20gJy4vRXhwbG9zaW9uJztcclxuXHJcbnR5cGUgUmVjdCA9IFBsYXllciB8IEVuZW15IHwgUHJvamVjdGlsZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XHJcbiAgICBwbGF5ZXI6IFBsYXllcjtcclxuICAgIGlucHV0OiBJbnB1dEhhbmRsZXI7XHJcbiAgICB1aTogVUk7XHJcbiAgICBrZXlzOiBzdHJpbmdbXTtcclxuICAgIGVuZW1pZXM6IEVuZW15W107XHJcbiAgICBwYXJ0aWNsZXM6IFBhcnRpY2xlW107XHJcbiAgICBleHBsb3Npb25zOiBFeHBsb3Npb25bXTtcclxuICAgIGVuZW15VGltZXI6IG51bWJlcjtcclxuICAgIGVuZW15SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIGFtbW86IG51bWJlcjtcclxuICAgIG1heEFtbW86IG51bWJlcjtcclxuICAgIGFtbW9UaW1lcjogbnVtYmVyO1xyXG4gICAgYW1tb0ludGVydmFsOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgd2lubmluZ1Njb3JlOiBudW1iZXI7XHJcbiAgICBnYW1lT3ZlcjogYm9vbGVhbjtcclxuICAgIGdhbWVUaW1lOiBudW1iZXI7XHJcbiAgICB0aW1lTGltaXQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBkZWJ1ZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gMjAwMDtcclxuICAgICAgICB0aGlzLmFtbW8gPSAyMDtcclxuICAgICAgICB0aGlzLm1heEFtbW8gPSA1MDtcclxuICAgICAgICB0aGlzLmFtbW9UaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbW1vSW50ZXJ2YWwgPSAzNTA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy53aW5uaW5nU2NvcmUgPSA4MDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGltaXQgPSAzMDAwMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB0aGlzLmdhbWVUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lVGltZSA+IHRoaXMudGltZUxpbWl0KSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5sYXllcjQudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIC8vIHJlZmlsbCBhbW1vXHJcbiAgICAgICAgaWYgKHRoaXMuYW1tb1RpbWVyID4gdGhpcy5hbW1vSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW1tbyA8IHRoaXMubWF4QW1tbykgdGhpcy5hbW1vKys7XHJcbiAgICAgICAgICAgIHRoaXMuYW1tb1RpbWVyID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9UaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwYXJ0aWNsZXNcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMuZm9yRWFjaCgoZXhwbG9zaW9uKSA9PiBleHBsb3Npb24udXBkYXRlKGRlbHRhVGltZSkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IHRoaXMuZXhwbG9zaW9ucy5maWx0ZXIoKGV4cGxvc2lvbikgPT4gIWV4cGxvc2lvbi5tYXJrZWRGb3JEZWxldGlvbik7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHBhcnRpY2xlLnVwZGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcigocGFydGljbGUpID0+ICFwYXJ0aWNsZS5tYXJrZWRGb3JEZWxldGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbnNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIGVuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeHBsb3Npb24oZW5lbXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwYXJ0aWNsZXMgb24gZW5lbXkgZGVzdHJveVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteS5zY29yZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcywgZW5lbXkueCArIGVuZW15LndpZHRoICogMC41LCBlbmVteS55ICsgZW5lbXkuaGVpZ2h0ICogMC41KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnR5cGUgPT09ICdsdWNreScpIHRoaXMucGxheWVyLmVudGVyUG93ZXJVcCgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZ2FtZU92ZXIpIHRoaXMuc2NvcmUtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wcm9qZWN0aWxlcy5mb3JFYWNoKChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbihwcm9qZWN0aWxlLCBlbmVteSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteS5saXZlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpbGUubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcGFydGljbGUgd2hlbiBoaXRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLCBlbmVteS54ICsgZW5lbXkud2lkdGggKiAwLjUsIGVuZW15LnkgKyBlbmVteS5oZWlnaHQgKiAwLjUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZW15LmxpdmVzIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4cGxvc2lvbihlbmVteSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXkudHlwZSA9PT0gJ2hpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBEcm9uZSh0aGlzLCBlbmVteS54ICsgTWF0aC5yYW5kb20oKSAqIGVuZW15LndpZHRoLCBlbmVteS55ICsgTWF0aC5yYW5kb20oKSAqIGVuZW15LmhlaWdodCAqIDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcGFydGljbGVzIG9uIGVuZW15IGRlc3Ryb3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteS5zY29yZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLCBlbmVteS54ICsgZW5lbXkud2lkdGggKiAwLjUsIGVuZW15LnkgKyBlbmVteS5oZWlnaHQgKiAwLjUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB0aGlzLnNjb3JlICs9IGVuZW15LnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5zY29yZSA+IHRoaXMud2lubmluZ1Njb3JlKSB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuZW15KSA9PiAhZW5lbXkubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICAvLyBzcGF3biBlbmVtaWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lciA+IHRoaXMuZW5lbXlJbnRlcnZhbCAmJiAhdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVpLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4gcGFydGljbGUuZHJhdyhjb250ZXh0KSk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zLmZvckVhY2goKGV4cGxvc2lvbikgPT4gZXhwbG9zaW9uLmRyYXcoY29udGV4dCkpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5sYXllcjQuZHJhdyhjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFbmVteSgpIHtcclxuICAgICAgICBjb25zdCByYW5kb21pemUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmIChyYW5kb21pemUgPCAwLjMpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBBbmdsZXIxKHRoaXMpKTtcclxuICAgICAgICBlbHNlIGlmIChyYW5kb21pemUgPCAwLjYpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBBbmdsZXIyKHRoaXMpKTtcclxuICAgICAgICBlbHNlIGlmIChyYW5kb21pemUgPCAwLjcpIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBIaXZlV2hhbGUodGhpcykpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEx1Y2t5RmlzaCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXhwbG9zaW9uKGVuZW15OiBFbmVteSkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbWl6ZSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYgKHJhbmRvbWl6ZSA8IDAuNSkgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IFNtb2tlRXhwb2xzaW9uKHRoaXMsIGVuZW15LnggKyBlbmVteS53aWR0aCAqIDAuNSwgZW5lbXkueSArIGVuZW15LmhlaWdodCAqIDAuNSkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEZpcmVFeHBvbHNpb24odGhpcywgZW5lbXkueCArIGVuZW15LndpZHRoICogMC41LCBlbmVteS55ICsgZW5lbXkuaGVpZ2h0ICogMC41KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24ocmVjdDE6IFJlY3QsIHJlY3QyOiBSZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJiAvL1xyXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPiByZWN0Mi55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhhbmRsZXIge1xyXG4gICAgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgoZS5rZXkgPT09ICdBcnJvd1VwJyB8fCBlLmtleSA9PT0gJ0Fycm93RG93bicpICYmIHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMucHVzaChlLmtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5zaG9vdFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuZGVidWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmtleXMuc3BsaWNlKHRoaXMuZ2FtZS5rZXlzLmluZGV4T2YoZS5rZXkpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHNwZWVkTW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgc3BlZWRNb2RpZmllcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZE1vZGlmaWVyID0gc3BlZWRNb2RpZmllcjtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTc2ODtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwMDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPD0gLXRoaXMud2lkdGgpIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuZ2FtZS5zcGVlZCAqIHRoaXMuc3BlZWRNb2RpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBmcmFtZVg6IG51bWJlcjtcclxuICAgIGZyYW1lWTogbnVtYmVyO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBzcHJpdGVTaXplOiBudW1iZXI7XHJcbiAgICBzaXplTW9kaWZpZXI6IG51bWJlcjtcclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIHNwZWVkWDogbnVtYmVyO1xyXG4gICAgc3BlZWRZOiBudW1iZXI7XHJcbiAgICBncmF2aXR5OiBudW1iZXI7XHJcbiAgICBtYXJrZWRGb3JEZWxldGlvbjogYm9vbGVhbjtcclxuICAgIGFuZ2xlOiBudW1iZXI7XHJcbiAgICB2YTogbnVtYmVyO1xyXG4gICAgYm91bmNlZDogbnVtYmVyO1xyXG4gICAgYm90dG9tQm91bmNlQm91bmRhcnk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VhcnMnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICB0aGlzLnNwcml0ZVNpemUgPSA1MDtcclxuICAgICAgICB0aGlzLnNpemVNb2RpZmllciA9IE51bWJlcigoTWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNSkudG9GaXhlZCgxKSk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5zcHJpdGVTaXplICogdGhpcy5zaXplTW9kaWZpZXI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnJhbmRvbSgpICogLTE1O1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy52YSA9IE1hdGgucmFuZG9tKCkgKiAwLjIgLSAwLjE7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VkID0gMDtcclxuICAgICAgICB0aGlzLmJvdHRvbUJvdW5jZUJvdW5kYXJ5ID0gTWF0aC5yYW5kb20oKSAqIDgwICsgNjA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy52YTtcclxuICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYICsgdGhpcy5nYW1lLnNwZWVkO1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmhlaWdodCArIHRoaXMuc2l6ZSB8fCB0aGlzLnggPCAwIC0gdGhpcy5zaXplKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSB0aGlzLmJvdHRvbUJvdW5jZUJvdW5kYXJ5ICYmIHRoaXMuYm91bmNlZCA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2VkKys7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIGNvbnRleHQucm90YXRlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLCAvL1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCAqIHRoaXMuc3ByaXRlU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLnNwcml0ZVNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVTaXplLFxyXG4gICAgICAgICAgICB0aGlzLnNpemUgKiAtMC41LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUgKiAtMC41LFxyXG4gICAgICAgICAgICB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL1Byb2plY3RpbGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgZnJhbWVYOiBudW1iZXI7XHJcbiAgICBmcmFtZVk6IG51bWJlcjtcclxuICAgIG1heEZyYW1lOiBudW1iZXI7XHJcbiAgICBzcGVlZFk6IG51bWJlcjtcclxuICAgIG1heFNwZWVkOiBudW1iZXI7XHJcbiAgICBwcm9qZWN0aWxlczogUHJvamVjdGlsZVtdO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwb3dlclVwOiBib29sZWFuO1xyXG4gICAgcG93ZXJVcFRpbWVyOiBudW1iZXI7XHJcbiAgICBwb3dlclVwTGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTIwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTkwO1xyXG4gICAgICAgIHRoaXMueCA9IDIwO1xyXG4gICAgICAgIHRoaXMueSA9IDEwMDtcclxuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSAzNztcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvd2VyVXBUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwTGltaXQgPSAxMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93VXAnKSkgdGhpcy5zcGVlZFkgPSAtdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUua2V5cy5pbmNsdWRlcygnQXJyb3dEb3duJykpIHRoaXMuc3BlZWRZID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIHRoaXMuc3BlZWRZID0gMDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsIGJvdW5kYXJpZXNcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICogMC41KSB0aGlzLnkgPSB0aGlzLmdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKiAwLjU7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy55IDwgLXRoaXMuaGVpZ2h0ICogMC41KSB0aGlzLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBwcm9qZWN0aWxlc1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSB0aGlzLnByb2plY3RpbGVzLmZpbHRlcigocHJvamVjdGlsZSkgPT4gIXByb2plY3RpbGUubWFya2VkRm9yRGVsZXRpb24pO1xyXG5cclxuICAgICAgICAvLyBzcHJpdGUgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBvd2VyIHVwXHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXJVcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3dlclVwVGltZXIgPiB0aGlzLnBvd2VyVXBMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlclVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLmFtbW8gPiB0aGlzLmdhbWUubWF4QW1tbykgdGhpcy5nYW1lLmFtbW8gPSB0aGlzLmdhbWUubWF4QW1tbztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcFRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hbW1vICs9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWcpIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsIC8vXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVkgKiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RUb3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2gobmV3IFByb2plY3RpbGUodGhpcy5nYW1lLCB0aGlzLnggKyA4MCwgdGhpcy55ICsgMzApKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFtbW8tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXJVcCkgdGhpcy5zaG9vdEJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290Qm90dG9tKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuYW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKG5ldyBQcm9qZWN0aWxlKHRoaXMuZ2FtZSwgdGhpcy54ICsgODAsIHRoaXMueSArIDE3NSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbnRlclBvd2VyVXAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlclVwVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucG93ZXJVcCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5hbW1vIDwgdGhpcy5nYW1lLm1heEFtbW8pIHRoaXMuZ2FtZS5hbW1vID0gdGhpcy5nYW1lLm1heEFtbW87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIG1hcmtlZEZvckRlbGV0aW9uOiBib29sZWFuO1xyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RpbGUnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5nYW1lLndpZHRoKSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgZm9udFNpemU6IG51bWJlcjtcclxuICAgIGZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDI1O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9ICdCYW5nZXJzJztcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSAyO1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDI7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5mb250RmFtaWx5O1xyXG5cclxuICAgICAgICAvLyBzY29yZVxyXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ1Njb3JlOiAnICsgdGhpcy5nYW1lLnNjb3JlLCAyMCwgNDApO1xyXG5cclxuICAgICAgICAvLyB0aW1lclxyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkVGltZSA9ICh0aGlzLmdhbWUuZ2FtZVRpbWUgKiAwLjAwMSkudG9GaXhlZCgxKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdUaW1lcjogJyArIGZvcm1hdGVkVGltZSwgMjAsIDEwMCk7XHJcblxyXG4gICAgICAgIC8vIGdhbWUgb3ZlciBtZXNzYWdlXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTE6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UyOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNjb3JlID4gdGhpcy5nYW1lLndpbm5pbmdTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTEgPSAnWU9VIFdJTiEnO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTIgPSAnV2VsbCBkb25lISc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlMSA9ICdHQU1FIE9WRVIhJztcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UyID0gJzMwcyB3YXMgbm90IGVub3VnaCB0byBzY29yZSA4MHB0cywgdHJ5IGFnYWluISc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICc3MHB4ICcgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobWVzc2FnZTEsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDIwKTtcclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gJzI1cHggJyArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChtZXNzYWdlMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41ICsgMjApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYW1tb1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLnBvd2VyVXApIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmYmQnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLmFtbW87IGkrKykge1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDIwICsgNSAqIGksIDUwLCAzLCAyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vY2xhc3Nlcy9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi9jbGFzc2VzL1Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vY2xhc3Nlcy9QYXJ0aWNsZSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vY2xhc3Nlcy9QbGF5ZXInO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vY2xhc3Nlcy9FbmVteSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi9jbGFzc2VzL0xheWVyJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4vY2xhc3Nlcy9CYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL2NsYXNzZXMvVUknO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jbGFzc2VzL0dhbWUnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjYW52YXMgc2V0dXBcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBsYXN0VGltZSA9IDA7XHJcblxyXG4gICAgLy8gYW5pbWF0aW9uIGxvb3BcclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUodGltZVN0YW1wOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lU3RhbXAgLSBsYXN0VGltZTtcclxuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZ2FtZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKDApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


var Game = /** @class */ (function () {
    function Game(width, height) {
        this.width = width;
        this.height = height;
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player(this);
        this.input = new _InputHandler__WEBPACK_IMPORTED_MODULE_0__.InputHandler(this);
        this.keys = [];
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
    }
    Game.prototype.update = function (deltaTime) {
        this.player.update();
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo)
                this.ammo++;
            this.ammoTimer = 0;
        }
        else {
            this.ammoTimer += deltaTime;
        }
    };
    Game.prototype.draw = function (context) {
        this.player.draw(context);
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
        this.speedY = 0;
        this.maxSpeed = 3;
        this.projectiles = [];
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
    };
    Player.prototype.draw = function (context) {
        context.fillStyle = 'black';
        context.fillRect(this.x, this.y, this.width, this.height);
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
        if (this.x > this.game.width + 0.8)
            this.markForDeletion = true;
    };
    Projectile.prototype.draw = function (context) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Projectile;
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
    canvas.width = 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBaUI7UUFDOUIsSUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9HYW1lLnRzIiwid2VicGFjazovL2FpLWNhci8uL3NyYy9jbGFzc2VzL0lucHV0SGFuZGxlci50cyIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYWktY2FyLy4vc3JjL2NsYXNzZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWktY2FyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9haS1jYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9haS1jYXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tICcuL0lucHV0SGFuZGxlcic7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHBsYXllcjogUGxheWVyO1xyXG4gICAgaW5wdXQ6IElucHV0SGFuZGxlcjtcclxuICAgIGtleXM6IHN0cmluZ1tdO1xyXG4gICAgYW1tbzogbnVtYmVyO1xyXG4gICAgbWF4QW1tbzogbnVtYmVyO1xyXG4gICAgYW1tb1RpbWVyOiBudW1iZXI7XHJcbiAgICBhbW1vSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5rZXlzID0gW107XHJcbiAgICAgICAgdGhpcy5hbW1vID0gMjA7XHJcbiAgICAgICAgdGhpcy5tYXhBbW1vID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbW1vVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYW1tb0ludGVydmFsID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFtbW9UaW1lciA+IHRoaXMuYW1tb0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFtbW8gPCB0aGlzLm1heEFtbW8pIHRoaXMuYW1tbysrO1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9UaW1lciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbW1vVGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoKGUua2V5ID09PSAnQXJyb3dVcCcgfHwgZS5rZXkgPT09ICdBcnJvd0Rvd24nKSAmJiB0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5rZXlzLnB1c2goZS5rZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIuc2hvb3RUb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUua2V5cy5pbmRleE9mKGUua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUua2V5cy5zcGxpY2UodGhpcy5nYW1lLmtleXMuaW5kZXhPZihlLmtleSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL1Byb2plY3RpbGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBnYW1lOiBHYW1lO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc3BlZWRZOiBudW1iZXI7XHJcbiAgICBtYXhTcGVlZDogbnVtYmVyO1xyXG4gICAgcHJvamVjdGlsZXM6IFByb2plY3RpbGVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTIwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTkwO1xyXG4gICAgICAgIHRoaXMueCA9IDIwO1xyXG4gICAgICAgIHRoaXMueSA9IDEwMDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmtleXMuaW5jbHVkZXMoJ0Fycm93VXAnKSkgdGhpcy5zcGVlZFkgPSAtdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUua2V5cy5pbmNsdWRlcygnQXJyb3dEb3duJykpIHRoaXMuc3BlZWRZID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICBlbHNlIHRoaXMuc3BlZWRZID0gMDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBwcm9qZWN0aWxlc1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSB0aGlzLnByb2plY3RpbGVzLmZpbHRlcigocHJvamVjdGlsZSkgPT4gIXByb2plY3RpbGUubWFya0ZvckRlbGV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RpbGUuZHJhdyhjb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdFRvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMucHVzaChuZXcgUHJvamVjdGlsZSh0aGlzLmdhbWUsIHRoaXMueCArIDgwLCB0aGlzLnkgKyAzMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYW1tby0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHtcclxuICAgIGdhbWU6IEdhbWU7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgbWFya0ZvckRlbGV0aW9uOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMztcclxuICAgICAgICB0aGlzLnNwZWVkID0gMztcclxuICAgICAgICB0aGlzLm1hcmtGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5nYW1lLndpZHRoICsgMC44KSB0aGlzLm1hcmtGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd5ZWxsb3cnO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vY2xhc3Nlcy9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi9jbGFzc2VzL1Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vY2xhc3Nlcy9QYXJ0aWNsZSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vY2xhc3Nlcy9QbGF5ZXInO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vY2xhc3Nlcy9FbmVteSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi9jbGFzc2VzL0xheWVyJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4vY2xhc3Nlcy9CYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL2NsYXNzZXMvVUknO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jbGFzc2VzL0dhbWUnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjYW52YXMgc2V0dXBcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDUwMDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcblxyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcclxuXHJcbiAgICAvLyBhbmltYXRpb24gbG9vcFxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSh0aW1lU3RhbXA6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xyXG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIGdhbWUuZHJhdyhjdHgpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuICAgIGFuaW1hdGUoMCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
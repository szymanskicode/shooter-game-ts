import { Game } from './Game';

export class Explosion {
    game: Game;
    x: number;
    y: number;
    frameX: number;
    spriteWidth: number;
    spriteHeight: number;
    width: number;
    height: number;
    fps: number;
    timer: number;
    interval: number;
    markedForDeletion: boolean;
    image: HTMLImageElement;
    maxFrame: number;

    constructor(game: Game, x: number, y: number) {
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

    update(deltaTime: number) {
        this.x -= this.game.speed;
        if (this.timer > this.interval) {
            this.frameX++;
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }

        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

export class SmokeExpolsion extends Explosion {
    game: Game;
    x: number;
    y: number;
    spriteWidth: number;
    width: number;
    height: number;

    constructor(game: Game, x: number, y: number) {
        super(game, x, y);
        this.image = document.getElementById('smokeExplosion') as HTMLImageElement;
    }
}

export class FireExpolsion extends Explosion {
    game: Game;
    x: number;
    y: number;
    spriteWidth: number;
    width: number;
    height: number;

    constructor(game: Game, x: number, y: number) {
        super(game, x, y);
        this.image = document.getElementById('fireExplosion') as HTMLImageElement;
    }
}

import { Game } from './Game';

export class Explosion {
    game: Game;
    x: number;
    y: number;
    frameX: number;
    spriteHeight: number;
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
        this.fps = 15;
        this.interval = 1000 / this.fps;
        this.markedForDeletion = false;
        this.maxFrame = 8;
    }

    update(deltaTime: number) {
        this.frameX++;
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y);
    }
}

export class smokeExpolsion extends Explosion {
    game: Game;
    x: number;
    y: number;
    spriteWidth: number;
    width: number;
    height: number;

    constructor(game: Game, x: number, y: number) {
        super(game, x, y);
        this.image = document.getElementById('smokeExplosion') as HTMLImageElement;
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
    }
}

export class fireExpolsion extends Explosion {}

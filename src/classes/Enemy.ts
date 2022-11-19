import { Game } from './Game';

export class Enemy {
    game: Game;
    x: number;
    y: number;
    width: number;
    height: number;
    frameX: number;
    frameY: number;
    speedX: number;
    markedForDeletion: boolean;
    lives: number;
    score: number;
    maxFrame: number;
    image: HTMLImageElement;

    constructor(game: Game) {
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

    update() {
        this.x += this.speedX - this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;

        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(
            this.image, //
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
        context.font = '20px Halvetica';
        context.fillText(this.lives.toString(), this.x, this.y);
    }
}

export class Angler1 extends Enemy {
    game: Game;

    constructor(game: Game) {
        super(game);
        this.width = 228;
        this.height = 169;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById('angler1') as HTMLImageElement;
        this.frameY = Math.floor(Math.random() * 3);
    }
}

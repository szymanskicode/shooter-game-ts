import { Game } from './Game';

export class Enemy {
    game: Game;
    x: number;
    y: number;
    width: number;
    height: number;
    speedX: number;
    markedForDeletion: boolean;

    constructor(game: Game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;
    }

    update() {
        this.x += this.speedX;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class Angler1 extends Enemy {
    game: Game;

    constructor(game: Game) {
        super(game);
        this.width = 228 * 0.2;
        this.height = 169 * 0.2;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }
}

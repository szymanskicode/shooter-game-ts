import { Game } from './Game';

export class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speedY: number;
    maxSpeed: number;

    constructor(game: Game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 2;
    }

    update() {
        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
        else this.speedY = 0;

        this.y += this.speedY;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

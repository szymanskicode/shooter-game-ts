import { Game } from './Game';

export class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speedY: number;

    constructor(game: Game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
    }

    update() {
        this.y += this.speedY;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

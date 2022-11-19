import { Game } from './Game';

export class Projectile {
    game: Game;
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    markForDeletion: boolean;

    constructor(game: Game, x: number, y: number) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 3;
        this.speed = 3;
        this.markForDeletion = false;
    }

    update() {
        this.x += this.speed;
        if (this.x > this.game.width) this.markForDeletion = true;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

import { Game } from './Game';

export class UI {
    game: Game;
    fontSize: number;
    fontFamily: string;
    color: string;

    constructor(game: Game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Halvetica';
        this.color = 'yellow';
    }

    draw(context: CanvasRenderingContext2D) {
        // ammo
        context.fillStyle = this.color;
        for (let i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 5 * i, 50, 3, 20);
        }
    }
}

import { InputHandler } from './InputHandler';
import { Player } from './Player';

export class Game {
    width: number;
    height: number;
    player: Player;
    input: InputHandler;
    keys: string[];
    ammo: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.keys = [];
        this.ammo = 20;
    }

    update() {
        this.player.update();
    }

    draw(context: CanvasRenderingContext2D) {
        this.player.draw(context);
    }
}

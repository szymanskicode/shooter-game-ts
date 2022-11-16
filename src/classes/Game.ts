import { Player } from './Player';

export class Game {
    width: number;
    height: number;
    context: CanvasRenderingContext2D;
    player: Player;

    constructor(width: number, height: number, context: CanvasRenderingContext2D) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.player = new Player(this);
    }

    update() {
        this.player.update();
    }

    draw() {
        this.player.draw(this.context);
    }
}

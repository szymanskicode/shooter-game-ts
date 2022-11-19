import { Game } from './Game';

export class UI {
    game: Game;
    fontSize: number;
    fontFamily: string;
    color: string;

    constructor(game: Game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'white';
    }

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.fillStyle = this.color;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';
        context.font = this.fontSize + 'px ' + this.fontFamily;

        // score
        context.fillText('Score: ' + this.game.score, 20, 40);

        // ammo
        for (let i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 5 * i, 50, 3, 20);
        }

        // timer
        const formatedTime = (this.game.gameTime * 0.001).toFixed(1);
        context.fillText('Timer: ' + formatedTime, 20, 100);

        // game
        if (this.game.gameOver) {
            context.textAlign = 'center';
            let message1: string;
            let message2: string;

            if (this.game.score > this.game.winningScore) {
                message1 = 'YOU WIN!';
                message2 = 'Well done!';
            } else {
                message1 = 'GAME OVER!';
                message2 = 'Try again next time!';
            }

            context.font = '50px ' + this.fontFamily;
            context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);
            context.font = '20px ' + this.fontFamily;
            context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 40);
        }

        context.restore();
    }
}

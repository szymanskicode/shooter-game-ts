import { Game } from './Game';

export class UI {
    game: Game;
    fontSize: number;
    fontFamily: string;
    color: string;

    constructor(game: Game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Bangers';
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

        // timer
        const formatedTime = (this.game.gameTime * 0.001).toFixed(1);
        context.fillText('Timer: ' + formatedTime, 20, 100);

        // game over message
        if (this.game.gameOver) {
            context.textAlign = 'center';
            let message1: string;
            let message2: string;

            if (this.game.score > this.game.winningScore) {
                message1 = 'YOU WIN!';
                message2 = 'Well done!';
            } else {
                message1 = 'GAME OVER!';
                message2 = '30s was not enough to score 80pts, try again!';
            }

            context.font = '70px ' + this.fontFamily;
            context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = '25px ' + this.fontFamily;
            context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 20);
        }

        // ammo
        if (this.game.player.powerUp) context.fillStyle = '#ffffbd';
        for (let i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 5 * i, 50, 3, 20);
        }

        context.restore();
    }
}

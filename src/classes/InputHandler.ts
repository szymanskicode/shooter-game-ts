import { Game } from './Game';

export class InputHandler {
    game: Game;

    constructor(game: Game) {
        this.game = game;
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && this.game.keys.indexOf(e.key) === -1) {
                this.game.keys.push(e.key);
            } else if (e.key === ' ') {
                this.game.player.shootTop();
            } else if (e.key === 'd') {
                this.game.debug = !this.game.debug;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (this.game.keys.indexOf(e.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
            }
        });
    }
}

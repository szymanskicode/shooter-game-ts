import { InputHandler } from './InputHandler';
import { Player } from './Player';
import { UI } from './UI';
import { Angler1, Enemy } from './Enemy';

export class Game {
    width: number;
    height: number;
    player: Player;
    input: InputHandler;
    ui: UI;
    keys: string[];
    enemies: Enemy[];
    enemyTimer: number;
    enemyInterval: number;
    ammo: number;
    maxAmmo: number;
    ammoTimer: number;
    ammoInterval: number;
    gameOver: boolean;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.keys = [];
        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.gameOver = false;
    }

    update(deltaTime: number) {
        this.player.update();

        // refill ammo
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

        this.enemies.forEach((enemy) => {
            enemy.update();
        });
        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);

        // spawn enemies
        if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        this.player.draw(context);
        this.ui.draw(context);
        this.enemies.forEach((enemy) => {
            enemy.draw(context);
        });
    }

    addEnemy() {
        this.enemies.push(new Angler1(this));
    }
}

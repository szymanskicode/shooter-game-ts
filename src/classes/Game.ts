import { InputHandler } from './InputHandler';
import { Player } from './Player';
import { UI } from './UI';
import { Angler1, Enemy } from './Enemy';
import { Projectile } from './Projectile';
import { Background } from './Background';

type Rect = Player | Enemy | Projectile;

export class Game {
    width: number;
    height: number;
    background: Background;
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
    score: number;
    winningScore: number;
    gameOver: boolean;
    gameTime: number;
    timeLimit: number;
    speed: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.background = new Background(this);
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
        this.score = 0;
        this.winningScore = 10;
        this.gameOver = false;
        this.gameTime = 0;
        this.timeLimit = 5000;
        this.speed = 1;
    }

    update(deltaTime: number) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;

        this.background.update();
        this.background.layer4.update();
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

            // collisions
            if (this.checkCollision(this.player, enemy)) {
                enemy.markedForDeletion = true;
            }
            this.player.projectiles.forEach((projectile) => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.lives--;
                    projectile.markForDeletion = true;
                    if (enemy.lives <= 0) {
                        enemy.markedForDeletion = true;
                        if (!this.gameOver) this.score += enemy.score;
                        if (this.score > this.winningScore) this.gameOver = true;
                    }
                }
            });
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
        this.background.draw(context);
        this.player.draw(context);
        this.ui.draw(context);
        this.enemies.forEach((enemy) => {
            enemy.draw(context);
        });
        this.background.layer4.draw(context);
    }

    addEnemy() {
        this.enemies.push(new Angler1(this));
    }

    checkCollision(rect1: Rect, rect2: Rect) {
        return (
            rect1.x < rect2.x + rect2.width && //
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }
}

import { InputHandler } from './InputHandler';
import { Player } from './Player';
import { UI } from './UI';
import { Angler1, Angler2, Drone, Enemy, HiveWhale, LuckyFish } from './Enemy';
import { Projectile } from './Projectile';
import { Background } from './Background';
import { Particle } from './Particle';
import { Explosion } from './Explosion';

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
    particles: Particle[];
    explosions: Explosion[];
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
    debug: boolean;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.background = new Background(this);
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.keys = [];
        this.enemies = [];
        this.particles = [];
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
        this.timeLimit = 30000;
        this.speed = 1;
        this.debug = false;
    }

    update(deltaTime: number) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;

        this.background.update();
        this.background.layer4.update();
        this.player.update(deltaTime);

        // refill ammo
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

        // particles
        this.explosions.forEach((explosion) => explosion.update(deltaTime));
        this.explosions = this.explosions.filter((explosion) => !explosion.markedForDeletion);
        this.particles.forEach((particle) => particle.update());
        this.particles = this.particles.filter((particle) => !particle.markedForDeletion);

        this.enemies.forEach((enemy) => {
            enemy.update();

            // collisions
            if (this.checkCollision(this.player, enemy)) {
                enemy.markedForDeletion = true;

                // create particles on enemy destroy
                for (let i = 0; i < enemy.score; i++) {
                    this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                }

                if (enemy.type === 'lucky') this.player.enterPowerUp();
                else this.score--;
            }
            this.player.projectiles.forEach((projectile) => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.lives--;
                    projectile.markedForDeletion = true;

                    // create particle when hit
                    this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));

                    if (enemy.lives <= 0) {
                        enemy.markedForDeletion = true;

                        if (enemy.type === 'hive') {
                            for (let i = 0; i < 5; i++) {
                                this.enemies.push(new Drone(this, enemy.x + Math.random() * enemy.width, enemy.y + Math.random() * enemy.height * 0.5));
                            }
                        }

                        // create particles on enemy destroy
                        for (let i = 0; i < enemy.score; i++) {
                            this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                        }

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
        this.ui.draw(context);
        this.player.draw(context);
        this.particles.forEach((particle) => particle.draw(context));
        this.enemies.forEach((enemy) => {
            enemy.draw(context);
        });
        this.explosions.forEach((explosion) => explosion.draw(context));
        this.background.layer4.draw(context);
    }

    addEnemy() {
        const randomize = Math.random();
        if (randomize < 0.3) this.enemies.push(new Angler1(this));
        else if (randomize < 0.6) this.enemies.push(new Angler2(this));
        else if (randomize < 0.8) this.enemies.push(new HiveWhale(this));
        else this.enemies.push(new LuckyFish(this));
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

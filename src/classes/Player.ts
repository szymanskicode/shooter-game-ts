import { Game } from './Game';
import { Projectile } from './Projectile';

export class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speedY: number;
    maxSpeed: number;
    projectiles: Projectile[];

    constructor(game: Game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 3;
        this.projectiles = [];
    }

    update() {
        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        this.y += this.speedY;

        // handle projectiles
        this.projectiles.forEach((projectile) => {
            projectile.update();
        });
        this.projectiles = this.projectiles.filter((projectile) => !projectile.markForDeletion);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'black';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach((projectile) => {
            projectile.draw(context);
        });
    }

    shootTop() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30));
            this.game.ammo--;
        }
    }
}

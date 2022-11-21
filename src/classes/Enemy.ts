import { Game } from './Game';

export class Enemy {
    game: Game;
    x: number;
    y: number;
    width: number;
    height: number;
    frameX: number;
    frameY: number;
    speedX: number;
    markedForDeletion: boolean;
    lives: number;
    score: number;
    maxFrame: number;
    image: HTMLImageElement;
    type: string;

    constructor(game: Game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
    }

    update() {
        this.x += this.speedX - this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;

        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height);
            context.font = '20px Halvetica';
            context.fillText(this.lives.toString(), this.x, this.y);
        }
        context.drawImage(
            this.image, //
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

export class Angler1 extends Enemy {
    constructor(game: Game) {
        super(game);
        this.width = 228;
        this.height = 169;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById('angler1') as HTMLImageElement;
        this.frameY = Math.floor(Math.random() * 3);
        this.lives = 2;
        this.score = this.lives;
    }
}

export class Angler2 extends Enemy {
    constructor(game: Game) {
        super(game);
        this.width = 213;
        this.height = 165;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler2') as HTMLImageElement;
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = this.lives;
    }
}

export class LuckyFish extends Enemy {
    constructor(game: Game) {
        super(game);
        this.width = 99;
        this.height = 95;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('lucky') as HTMLImageElement;
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = 15;
        this.type = 'lucky';
    }
}

export class HiveWhale extends Enemy {
    constructor(game: Game) {
        super(game);
        this.width = 400;
        this.height = 227;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('hivewhale') as HTMLImageElement;
        this.frameY = 0;
        this.lives = 15;
        this.score = this.lives;
        this.type = 'hive';
        this.speedX = Math.random() * -1.2 - 0.2;
    }
}

export class Drone extends Enemy {
    constructor(game: Game, x: number, y: number) {
        super(game);
        this.width = 115;
        this.height = 95;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('drone') as HTMLImageElement;
        this.frameY = Math.floor(Math.random() * 2);
        this.lives = 3;
        this.score = this.lives;
        this.type = 'drone';
        this.speedX = Math.random() * -4.2 - 0.5;
    }
}

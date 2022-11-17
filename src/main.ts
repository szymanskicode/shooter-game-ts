import { InputHandler } from './classes/InputHandler';
import { Projectile } from './classes/Projectile';
import { Particle } from './classes/Particle';
import { Player } from './classes/Player';
import { Enemy } from './classes/Enemy';
import { Layer } from './classes/Layer';
import { Background } from './classes/Background';
import { UI } from './classes/UI';
import { Game } from './classes/Game';

window.addEventListener('load', function () {
    // canvas setup
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    const game = new Game(canvas.width, canvas.height);

    let lastTime = 0;

    // animation loop
    function animate(timeStamp: number) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

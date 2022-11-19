import { Game } from './Game';
import { Layer } from './Layer';

export class Background {
    game: Game;
    image1: HTMLImageElement;
    image2: HTMLImageElement;
    image3: HTMLImageElement;
    image4: HTMLImageElement;
    layer1: Layer;
    layer2: Layer;
    layer3: Layer;
    layer4: Layer;
    layers: Layer[];

    constructor(game: Game) {
        this.game = game;
        this.image1 = document.getElementById('layer1') as HTMLImageElement;
        this.image2 = document.getElementById('layer2') as HTMLImageElement;
        this.image3 = document.getElementById('layer3') as HTMLImageElement;
        this.image4 = document.getElementById('layer4') as HTMLImageElement;
        this.layer1 = new Layer(this.game, this.image1, 0.2);
        this.layer2 = new Layer(this.game, this.image2, 0.4);
        this.layer3 = new Layer(this.game, this.image3, 1);
        this.layer4 = new Layer(this.game, this.image4, 1.5);
        this.layers = [this.layer1, this.layer2, this.layer3];
    }

    update() {
        this.layers.forEach((layer) => layer.update());
    }

    draw(context: CanvasRenderingContext2D) {
        this.layers.forEach((layer) => layer.draw(context));
    }
}

import {settings} from "./settings";
import {Background} from "./Background";

const flappyBird = {
    init() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.sprite = new Image();
        this.sprite.src = settings.spriteSrc;
        this.background = new Background(this.ctx, this.sprite);
        this.addEventListeners();
    },

    addEventListeners() {
        window.addEventListener('load', () => {
            this.background.draw();
        });
    }

}
flappyBird.init();
import {settings} from "./settings";

export class Background {
    private ctx: CanvasRenderingContext2D;
    private sprite: CanvasImageSource;

    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource) {
        this.ctx = ctx;
        this.sprite = sprite;
    }

    draw() {
        const f = settings.background.frame;
        this.ctx.drawImage(
            this.sprite,
            f.sx,
            f.sy,
            f.sw,
            f.sh,
            f.dx,
            f.dy,
            f.dw,
            f.dh,
        );
    }
}
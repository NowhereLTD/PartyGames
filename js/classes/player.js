
class Player {
        constructor(x = 0, y = 0) {
                this.position = {
                        x: x,
                        y: y
                };
        }

        render(ctx) {
                ctx.save();
                ctx.translate(this.position.x, this.position.y);

                // border
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#aaaaaa';
                ctx.strokeRect(-15, -70, 30, 70);
                // fill
                ctx.fillStyle = '#cc1122';
                ctx.fillRect(-15, -70, 30, 70);

                ctx.restore();
        }
}

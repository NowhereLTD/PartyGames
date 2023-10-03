
class BoardField {
        constructor(x = 0, y = 0, color = "#2261ba") {
                this.position = {
                        x: x,
                        y: y
                };
                this.color = color;

                this.previousField = null;
                this.nextField = null;
        }

        render(ctx) {
                ctx.save();
                ctx.translate(this.position.x, this.position.y);

                // draw circle
                ctx.beginPath();
                ctx.arc(0, 0, 30, 0, 2 * Math.PI);
                // border
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#aaaaaa';
                ctx.stroke();
                // fill
                ctx.fillStyle = this.color;
                ctx.fill();

                ctx.restore();
        }

        // function that should be called when a player stops on a field
        onStop() {

        }

        // function that should be called when a player passes a field
        onPass() {

        }
}

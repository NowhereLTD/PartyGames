
class Game {
        constructor() {
                // canvas
                this.canvas = document.createElement('canvas');
                this.canvas.width = 1280;
                this.canvas.height = 720;
                this.canvas.style.backgroundColor = "#ffffff";
                this.ctx = this.canvas.getContext("2d");
                // frame updating
                this.animationFrame = null;
                this.totalTime = null;
                this.startFrameTime = null;
                this.lastFrameTime = null;
                this.frameCount = 0;
                this.frameDelta = 0;
                this.fps = 0;
                // board
                this.board = null;
        }

        renderFrame(time) {
                // clear frame
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                // render everything else
                if (this.board !== null) {
                        this.board.render(this.ctx);
                }

                // update frame count
                this.updateFrameTime(time);
                this.renderFrameCount();

                // restart the loop
                window.requestAnimationFrame(this.renderFrame.bind(this));
        }

        // initiate the game
        init() {
                this.animationFrame = window.requestAnimationFrame(this.renderFrame.bind(this));
                document.body.appendChild(this.canvas);
        }

        // (re-)start the game
        start() {
                this.animationFrame = window.requestAnimationFrame(this.renderFrame.bind(this));
        }

        // stop the game
        stop() {
                window.cancelAnimationFrame(this.animationFrame);
        }

        // keep track of simulation time and frame updates
        updateFrameTime(time) {
                if (this.startFrameTime === null) {
                        this.startFrameTime = time / 1000;
                }

                // time passed since last frame draw
                this.frameDelta = (time / 1000) - this.lastFrameTime;
                // frames per second
                this.fps = (1 / this.frameDelta).toFixed(2);
                // total simulation time
                this.totalTime = (time / 1000).toFixed(2);
                // total number of drawn frames
                this.frameCount++;

                this.lastFrameTime = time / 1000;
        }

        // display frame update infos
        renderFrameCount() {
                this.ctx.save();
                this.ctx.translate(5, 10);

                this.ctx.fillStyle = "#333333";
                this.ctx.fillText("FPS: " + this.fps, 0, 0);
                this.ctx.fillText("Frame No.: " + this.frameCount, 0, 15);
                this.ctx.fillText("Total time: " + this.totalTime, 0, 30);

                this.ctx.restore();
        }
}

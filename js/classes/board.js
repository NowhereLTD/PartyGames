
class Board {
        constructor() {
                this.name = "Test board";
                // test data - can later be turned into a json for board creation
                this.fields = [
                        new BoardField(100, 120),
                        new BoardField(300, 120),
                        new BoardField(600, 120),
                        new BoardField(600, 260, "#cd4522"),
                        new BoardField(400, 260),
                        new BoardField(400, 410, "#67d512"),
                        new BoardField(540, 410, "#cd4522"),
                        new BoardField(630, 450, "#67d512"),
                        new BoardField(740, 450, "#67d512"),
                        new BoardField(800, 340),
                        new BoardField(800, 120),
                        new BoardField(920, 120),
                        new BoardField(920, 600, "#cd4522"),
                        new BoardField(710, 600),
                        new BoardField(570, 600),
                        new BoardField(350, 600),
                        new BoardField(100, 600, "#67d512"),
                ];
                this.players = [
                        new Player(this.fields[0].position.x, this.fields[0].position.y)
                ];
                this.playerFields = [];
        }

        render(ctx) {
                // draw a path from one field to the next
                this.drawFieldsPath(ctx);

                // draw all fields
                for (let i = 0; i < this.fields.length; i++) {
                        this.fields[i].render(ctx);
                }

                // draw all players
                for (let i = 0; i < this.players.length; i++) {
                        this.players[i].render(ctx);
                }
        }

        // find the fields each player is currently on
        findCurrentPlayerField(player) {
                for (let i = 0; i < this.fields.length; i++) {
                        const field = this.fields[i];

                        if ((player.position.x == field.position.x) && (player.position.y == field.position.y)) {
                                return field;
                        }
                }
        }

        // move a player by a given number of fields
        movePlayer(player, n) {
                // find starting field
                const startField = this.findCurrentPlayerField(player);
                const startIndex = this.fields.indexOf(startField);
                // find ending field
                const endField = this.fields[(startIndex + n) % this.fields.length];
                const endIndex = this.fields.indexOf(endField);

                // todo: make it so that the player moves slowly from one field to the next
                //       - track time and increase with each frame
                //       - moveTrack += game.frameDelta * moveSpeed
                //       - player.position = Math.lerp(player.position, nextField.position, moveTrack)
                //       - reset moveTrack when field is reached
                for (let i = startIndex; i !== endIndex + 1; i++) {
                        i = i % this.fields.length;
                        player.position.x = this.fields[i].position.x;
                        player.position.y = this.fields[i].position.y;
                }
        }

        // draws the connecting lines between fields
        drawFieldsPath(ctx) {
                ctx.save();
                // line style
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#aaaaaa';

                ctx.beginPath();
                // start at field #0
                ctx.moveTo(this.fields[0].position.x, this.fields[0].position.y);

                for (let i = 1; i < this.fields.length; i++) {
                        ctx.lineTo(this.fields[i].position.x, this.fields[i].position.y);
                }

                // finish at field #0
                ctx.lineTo(this.fields[0].position.x, this.fields[0].position.y);

                ctx.stroke();
                ctx.restore();
        }
}

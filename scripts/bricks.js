import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.game = game;
    this.position = position;
    this.width = 60;
    this.height = 24;
    this.markedForDeletion = false;
  }
  update() {
    if (detectCollision(this.game.ball, this)) {
      this.markedForDeletion = true;
      if (this.game.ball.speed.y > 0) {
        // coming from top
        this.game.ball.speed.y = -this.game.ball.speed.y;
        this.game.ball.position.y = this.position.y - this.game.ball.size;
      } else {
        // coming from bottom
        this.game.ball.speed.y = -this.game.ball.speed.y;
        this.game.ball.position.y = this.position.y + this.height;
      }
    }
  }
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width - 2,
      this.height - 2
    );
    ctx.fill();
    ctx.closePath();
  }
}

import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.position = { x: 50, y: 300 };
    this.speed = { x: 5, y: -4 };
    this.size = 10;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on left or right
    if (
      this.position.x - this.size < 0 ||
      this.position.x + this.size > this.gameWidth
    )
      this.speed.x = -this.speed.x;

    // wall on top or bottom
    if (
      this.position.y - this.size < 0 ||
      this.position.y + this.size > this.gameHeight
    )
      this.speed.y = -this.speed.y;

    // Collision with paddle
    if (detectCollision(this, this.game.paddle)) {
      let h = this.game.paddle.width / 2;
      let b = Math.abs(
        this.game.paddle.position.x +
          this.game.paddle.width / 2 -
          this.position.x
      );
      let p = Math.floor(Math.sqrt(h * h - b * b));

      let xc = b,
        yc = p;
      // coordinate on circle with center as center of paddle and diameter as width of paddle

      this.position.y = this.game.paddle.position.y - this.size;
      console.log(b / 10);
      if (
        this.game.paddle.position.x + this.game.paddle.width / 2 <
        this.position.x
      ) {
        this.speed.x = Math.abs(b) / 10;
      } else {
        this.speed.x = -Math.abs(b) / 10;
      }

      if (this.speed.y < 0) {
        this.speed.y = Math.abs(p) / 10;
      } else {
        this.speed.y = -Math.abs(p) / 10;
      }
    }
  }
}

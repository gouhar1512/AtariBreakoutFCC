export default class Brick {
  constructor(game, position) {
    this.game = game;
    this.position = position;
    this.width = 60;
    this.height = 24;
  }
  update() {}
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "silver";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x + 1,
      this.position.y + 1,
      this.width - 2,
      this.height - 2
    );
    ctx.fill();
    ctx.closePath();
  }
}

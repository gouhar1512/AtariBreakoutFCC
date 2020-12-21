export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.position = { x: 50, y: 10 };
    this.speed = { x: 5, y: 4 };
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

    // check collision with paddle
    let bottomOfball = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let widthOfPaddle = this.game.paddle.width;
    let rightSideOfPaddle = leftSideOfPaddle + widthOfPaddle;

    if (
      bottomOfball >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = topOfPaddle - this.size;
    }
  }
}

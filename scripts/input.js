const key = {
  LEFT: 37,
  RIGHT: 39,
  SPACE: 27,
};
export default class InputHandler {
  constructor(paddle, game) {
    this.keyDownHandler(paddle);
    this.keyUpHandler(paddle);
    this.game = game;
  }
  keyDownHandler(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case key.LEFT:
          paddle.moveLeft();
          break;
        case key.RIGHT:
          paddle.moveRight();
          break;
        case key.SPACE:
          this.game.togglePause();
      }
    });
  }

  keyUpHandler(paddle) {
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case key.LEFT:
        case key.RIGHT:
          paddle.stop();
          break;
      }
    });
  }
}

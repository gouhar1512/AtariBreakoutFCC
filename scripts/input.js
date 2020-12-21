export default class InputHandler {
  constructor(paddle) {
    this.keyDownHandler(paddle);
    this.keyUpHandler(paddle);
  }
  keyDownHandler(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "Left":
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "Right":
        case "ArrowRight":
          paddle.moveRight();
          break;
      }
    });
  }

  keyUpHandler(paddle) {
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "Left":
        case "ArrowLeft":
        case "Right":
        case "ArrowRight":
          paddle.stop();
          break;
      }
    });
  }
}

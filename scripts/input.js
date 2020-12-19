export default class InputHandler {
  constructor(paddle) {
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

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "Left":
        case "ArrowLeft":
          paddle.stop();
          break;
        case "Right":
        case "ArrowRight":
          paddle.stop();
          break;
      }
    });
  }
}

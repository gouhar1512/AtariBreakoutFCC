import Paddle from "./paddle.js";
import Ball from "./ball.js";
import { buildLevel, level1 } from "./levels.js";
import InputHandler from "./input.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameState = GAMESTATE.RUNNING;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.paddle, this.ball, ...bricks];
    new InputHandler(this.paddle, this);
  }

  update() {
    if (this.gameState == GAMESTATE.PAUSED) return;

    this.gameObjects = this.gameObjects.filter(
      (object) => !object.markedForDeletion
    );
    this.gameObjects.forEach((obj) => obj.update());
  }

  draw(ctx) {
    this.gameObjects.forEach((obj) => obj.draw(ctx));
  }

  togglePause() {
    if (this.gameState == GAMESTATE.PAUSED) this.gameState = GAMESTATE.RUNNING;
    else if (this.gameState == GAMESTATE.RUNNING)
      this.gameState = GAMESTATE.PAUSED;
  }
}

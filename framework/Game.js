class Game {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 1024;
    this.canvas.height = 576;
  }

  init() {}

  loadContent() {}

  update(deltaTime) {}

  draw(context) {}

  run() {
    let startTime = undefined;

    const loop = (currentTime) => {
      if (startTime === undefined) {
        startTime = currentTime;
      }

      const deltaTime = currentTime - startTime;

      this.update(deltaTime);
      this.draw(this.context);

      startTime = currentTime;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
}

export default Game;

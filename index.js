import Game from "./MyGame.js";

const start = () => {
  const game = new Game();
  game.init();
  game.loadContent();
  game.run();
};

start();

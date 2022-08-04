import './reset.css';
import './style.css';

import Game from './game';

const main = () => {
  const game = new Game();
  game.setUpNewGame();
};

main();

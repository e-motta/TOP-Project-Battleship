import Gameboard from './factories/gameboard';
import Player from './factories/player';
import Computer from './factories/computer-player';
import views from './views';

class Game {
  constructor() {
    this.playerGameboard = null;
    this.computerGameboard = null;
    this.player = null;
    this.computer = null;
  }

  placeComputerShips = () => {
    this.computerGameboard.randomPlaceAllShips();
  };

  placePlayerShips = () => {
    this.playerGameboard.setShipsProps();
    this.playerGameboard.placeAllShips();
  };

  setUpNewGame = () => {
    this.playerGameboard = new Gameboard();
    this.computerGameboard = new Gameboard();
    this.player = new Player(this.computerGameboard);
    this.computer = new Computer(this.playerGameboard);

    this.placePlayerShips();
    this.placeComputerShips();

    views.displayBoards();
    const playerShipsCoords = this.playerGameboard.allShipsInfo.map(
      (info) => info.ship.coords,
    );
    views.displayShips(playerShipsCoords, 'player');
    views.listenForAttacks(this);
    views.listenForRandomPlaceShips(this);

    views.initialMessage();
  };

  isGameOver = () => {
    if (this.computerGameboard.allShipsSunk()) {
      return { gameover: true, winner: 'player' };
    }

    if (this.playerGameboard.allShipsSunk()) {
      return { gameover: true, winner: 'computer' };
    }

    return { gameover: false, winner: null };
  };

  runGameLoop = (playerCoords) => {
    const computerTurn = () => {
      const computerAttack = this.computer.randomAttackEnemy();
      if (computerAttack.hit) {
        views.hitSquare(computerAttack.coords, 'player', true);
        views.displayScore(this.playerGameboard, 'player');
        views.disableClicks();

        const result = this.isGameOver();
        if (result.gameover && result.winner === 'computer') {
          views.showGameoverMessage(result.winner);
        } else {
          setTimeout(() => {
            computerTurn();
            views.enableClicks();
          }, 800);
        }
        return;
      }
      views.hitSquare(computerAttack.coords, 'player', false);
    };

    const playerTurn = () => {
      const playerAttack = this.player.attackEnemy(playerCoords);
      if (playerAttack) {
        views.hitSquare(playerCoords, 'computer', true);
        views.displayScore(this.playerGameboard, 'player');
        views.displayScore(this.computerGameboard, 'computer');

        const result = this.isGameOver();
        if (result.gameover && result.winner === 'player') {
          views.showGameoverMessage(result.winner);
        }
      } else {
        views.hitSquare(playerCoords, 'computer', false);
        views.disableClicks();
        setTimeout(() => {
          computerTurn();
          views.enableClicks();
        }, 500);
      }
    };

    playerTurn();

    views.displayScore(this.playerGameboard, 'player');
    views.displayScore(this.computerGameboard, 'computer');
  };
}

export default Game;

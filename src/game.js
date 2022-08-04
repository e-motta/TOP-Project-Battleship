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
    this.playerShipsProps = [
      { coord: [9, 9], length: 1, orientation: 'horizontal' },
      { coord: [0, 9], length: 1, orientation: 'horizontal' },
      { coord: [0, 0], length: 4, orientation: 'horizontal' },
      { coord: [0, 5], length: 3, orientation: 'horizontal' },
      { coord: [3, 4], length: 3, orientation: 'vertical' },
      { coord: [8, 0], length: 2, orientation: 'vertical' },
      { coord: [8, 2], length: 2, orientation: 'vertical' },
      { coord: [7, 7], length: 2, orientation: 'vertical' },
      { coord: [3, 0], length: 1, orientation: 'horizontal' },
      { coord: [3, 2], length: 1, orientation: 'horizontal' },
    ];
  }

  placePlayerShips = () => {
    this.playerShipsProps.forEach((shipProps) => {
      this.playerGameboard.placeShip(
        shipProps.coord,
        shipProps.length,
        shipProps.orientation,
      );
    });
  };

  preplaceComputerShips = () => {
    this.computerGameboard.placeShip([0, 5], 3, 'horizontal');
    this.computerGameboard.placeShip([3, 4], 3, 'vertical');
    this.computerGameboard.placeShip([8, 0], 2, 'vertical');
    this.computerGameboard.placeShip([8, 2], 2, 'vertical');
    this.computerGameboard.placeShip([7, 7], 2, 'vertical');
    this.computerGameboard.placeShip([0, 9], 1, 'horizontal');
    this.computerGameboard.placeShip([3, 0], 1, 'horizontal');
    this.computerGameboard.placeShip([0, 0], 4, 'horizontal');

    this.computerGameboard.placeShip([3, 2], 1, 'horizontal');
    this.computerGameboard.placeShip([9, 9], 1, 'horizontal');
  };

  randomPlaceShips = () => {
    const lengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const orientation = ['horizontal', 'vertical'];

    const retry = (length) => {
      const coords = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      const bin = Math.floor(Math.random() * 2);

      try {
        // this.computerGameboard.placeShip(coords, length, orientation[bin]);

        this.playerGameboard.placeShip(coords, length, orientation[bin]);
      } catch (error) {
        if (error.message === 'You cannot place ship outside the board'
        || error.message === 'You cannot place a ship over an existing ship or blasting area') {
          retry(length);
        }
      }
    };

    lengths.forEach((length) => retry(length));
  };

  setUpNewGame = () => {
    this.playerGameboard = new Gameboard();
    this.computerGameboard = new Gameboard();

    this.player = new Player(this.computerGameboard);
    this.computer = new Computer(this.playerGameboard);

    this.placePlayerShips();
    this.preplaceComputerShips(); // todo: implement player gui and auto placement for computer
    // this.randomPlaceShips();
    views.displayBoards();

    const playerShipsCoords = this.playerGameboard.allShipsInfo.map(
      (info) => info.coords,
    );
    views.displayShips(playerShipsCoords, 'player');
    views.listenForAttacks(this);
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

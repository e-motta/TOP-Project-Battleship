import Ship from './ship';

class Gameboard {
  constructor() {
    this.boardPlaces = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.boardHits = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.allShipsInfo = [];
    this.shipsProps = this.setShipsProps();
    this.selectedShipsProps = null;
  }

  #placeBlastingArea = (coord, length, orientation, i) => {
    if (orientation === 'horizontal') {
      if (i === coord[1] && i > 0) {
        this.boardPlaces[coord[0]][i - 1] = -1;
        if (coord[0] > 0) {
          this.boardPlaces[coord[0] - 1][i - 1] = -1;
        }
        if (coord[0] < 9) {
          this.boardPlaces[coord[0] + 1][i - 1] = -1;
        }
      }

      if (coord[0] > 0) {
        this.boardPlaces[coord[0] - 1][i] = -1;
      }
      if (coord[0] < 9) {
        this.boardPlaces[coord[0] + 1][i] = -1;
      }

      if (i === coord[1] + length - 1 && i < 9) {
        this.boardPlaces[coord[0]][i + 1] = -1;
        if (coord[0] > 0) {
          this.boardPlaces[coord[0] - 1][i + 1] = -1;
        }
        if (coord[0] < 9) {
          this.boardPlaces[coord[0] + 1][i + 1] = -1;
        }
      }
    }

    if (orientation === 'vertical') {
      if (i === coord[0] && i > 0) {
        this.boardPlaces[i - 1][coord[1]] = -1;
        if (coord[1] > 0) {
          this.boardPlaces[i - 1][coord[1] - 1] = -1;
        }
        if (coord[1] < 9) {
          this.boardPlaces[i - 1][coord[1] + 1] = -1;
        }
      }

      if (coord[1] > 0) {
        this.boardPlaces[i][coord[1] - 1] = -1;
      }
      if (coord[1] < 9) {
        this.boardPlaces[i][coord[1] + 1] = -1;
      }

      if (i === coord[0] + length - 1 && i < 9) {
        this.boardPlaces[i + 1][coord[1]] = -1;
        if (coord[1] > 0) {
          this.boardPlaces[i + 1][coord[1] - 1] = -1;
        }
        if (coord[1] < 9) {
          this.boardPlaces[i + 1][coord[1] + 1] = -1;
        }
      }
    }
  };

  resetAllShips = () => {
    this.boardPlaces = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.boardHits = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.allShipsInfo = [];
  };

  placeShip = (coord, length, orientation) => {
    const ship = new Ship(coord, length, orientation);
    const id = this.allShipsInfo.length + 1;

    if (orientation === 'horizontal') {
      if (coord[1] + length - 1 > 9) {
        throw new Error('You cannot place ship outside the board');
      }

      for (let i = coord[1]; i < coord[1] + length; i += 1) {
        if (this.boardPlaces[coord[0]][i] !== 0) {
          throw new Error('You cannot place a ship over an existing ship or blasting area');
        }

        this.boardPlaces[coord[0]][i] = id;
        this.#placeBlastingArea(coord, length, orientation, i);

        ship.coords.push([coord[0], i]);
      }
    }

    if (orientation === 'vertical') {
      if (coord[0] + length - 1 > 9) {
        throw new Error('You cannot place ship outside the board');
      }

      for (let i = coord[0]; i < coord[0] + length; i += 1) {
        if (this.boardPlaces[i][coord[1]] !== 0) {
          throw new Error('You cannot place a ship over an existing ship or blasting area');
        }

        this.boardPlaces[i][coord[1]] = id;
        this.#placeBlastingArea(coord, length, orientation, i);

        ship.coords.push([i, coord[1]]);
      }
    }

    this.allShipsInfo.push({ id, ship });
  };

  randomPlaceAllShips = () => {
    const lengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const orientation = ['horizontal', 'vertical'];

    const retry = (length) => {
      const coords = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      const bin = Math.floor(Math.random() * 2);

      try {
        this.placeShip(coords, length, orientation[bin]);
      } catch (error) {
        if (error.message === 'You cannot place ship outside the board'
        || error.message === 'You cannot place a ship over an existing ship or blasting area') {
          retry(length);
        }
      }
    };

    lengths.forEach((length) => retry(length));
  };

  setShipsProps = () => {
    if (this.selectedShipsProps) {
      localStorage.setItem(JSON.stringify(this.selectedShipsProps));
      return this.selectedShipsProps;
    }
    if (typeof window !== 'undefined'
      && localStorage.getItem('playerShipsProps')) {
      return JSON.parse(localStorage.getItem('playerShipsProps'));
    }
    return [
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
  };

  placeAllShips = () => {
    this.shipsProps.forEach((shipProps) => {
      this.placeShip(
        shipProps.coord,
        shipProps.length,
        shipProps.orientation,
      );
    });
  };

  receiveAttack = (coord) => {
    const hit = this.boardHits[coord[0]][coord[1]];
    if (hit !== 0) {
      throw new Error('You cannot attack the same place twice');
    }

    const id = this.boardPlaces[coord[0]][coord[1]];
    if (id > 0) {
      const shipInfo = this.allShipsInfo.find((s) => s.id === id);
      const position = shipInfo.ship.coords.findIndex(
        (el) => JSON.stringify(el) === JSON.stringify(coord),
      );
      shipInfo.ship.hit(position);
      this.boardHits[coord[0]][coord[1]] = id;
      return true;
    }
    this.boardHits[coord[0]][coord[1]] = -1;
    return false;
  };

  allShipsSunk = () => {
    let sunkCount = 0;
    this.allShipsInfo.forEach((info) => {
      if (info.ship.isSunk()) {
        sunkCount += 1;
      }
    });
    return sunkCount === this.allShipsInfo.length;
  };
}

export default Gameboard;

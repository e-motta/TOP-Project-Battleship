// board object for placing ships
// board object for placing hits
// function for placing ships
// function for placing hits
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

  placeShip = (coord, length, orientation) => {
    const ship = new Ship(coord, length, orientation);
    const id = this.allShipsInfo.length + 1;
    const coords = [];

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

        coords.push([coord[0], i]);
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

        coords.push([i, coord[1]]);
      }
    }

    this.allShipsInfo.push({ id, ship, coords });
  };

  receiveAttack = (coord) => {
    const hit = this.boardHits[coord[0]][coord[1]];
    if (hit !== 0) {
      throw new Error('You cannot attack the same place twice');
    }

    const id = this.boardPlaces[coord[0]][coord[1]];
    if (id > 0) {
      const shipInfo = this.allShipsInfo.find((s) => s.id === id);
      const position = shipInfo.coords.findIndex(
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

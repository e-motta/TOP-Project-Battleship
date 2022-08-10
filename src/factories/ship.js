class Ship {
  constructor(coord, length, orientation) {
    this.coord = coord;
    this.coords = [];
    this.length = this.constructor.setLength(length);
    this.orientation = orientation;
    this.positions = Array(this.length).fill(0);
  }

  static setLength = (length) => {
    if (length < 1) {
      throw Error('Ship length must be > 0');
    }
    return length;
  };

  hit = (pos) => {
    this.positions[pos] = 1;
  };

  isSunk = () => {
    if (!this.positions.includes(0)) {
      return true;
    }
    return false;
  };
}

export default Ship;

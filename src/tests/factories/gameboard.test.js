import Gameboard from '../../factories/gameboard';

it('places ship at specific coordinates horizontaly, with blasting area around it (middle)', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([2, 1], 2, 'horizontal');
  expect(gameboard.boardPlaces).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, 0, 0, 0, 0, 0, 0],
    [-1, 1, 1, -1, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it('places ship at specific coordinates horizontaly, with blasting area around it (corners)', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'horizontal');
  gameboard.placeShip([9, 7], 3, 'horizontal');
  expect(gameboard.boardPlaces).toEqual([
    [1, 1, -1, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, -1, 2, 2, 2],
  ]);
});

it('places ship at specific coordinates verticaly, with blasting area around it (middle)', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([2, 3], 4, 'vertical');
  expect(gameboard.boardPlaces).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, -1, -1, -1, 0, 0, 0, 0, 0],
    [0, 0, -1, 1, -1, 0, 0, 0, 0, 0],
    [0, 0, -1, 1, -1, 0, 0, 0, 0, 0],
    [0, 0, -1, 1, -1, 0, 0, 0, 0, 0],
    [0, 0, -1, 1, -1, 0, 0, 0, 0, 0],
    [0, 0, -1, -1, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it('places ship at specific coordinates verticaly, with blasting area around it (corners)', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'vertical');
  gameboard.placeShip([8, 9], 2, 'vertical');
  expect(gameboard.boardPlaces).toStrictEqual([
    [1, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, 0, -1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, -1, 2],
  ]);
});

it('places more than one ship with correct indices, with blasting area around it', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([2, 2], 4, 'vertical');
  gameboard.placeShip([2, 4], 3, 'vertical');
  expect(gameboard.boardPlaces).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, -1, -1, -1, -1, 0, 0, 0, 0],
    [0, -1, 1, -1, 2, -1, 0, 0, 0, 0],
    [0, -1, 1, -1, 2, -1, 0, 0, 0, 0],
    [0, -1, 1, -1, 2, -1, 0, 0, 0, 0],
    [0, -1, 1, -1, -1, -1, 0, 0, 0, 0],
    [0, -1, -1, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it('throws error when placing ship over an existing ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([2, 2], 4, 'vertical');
  expect(() => gameboard.placeShip([3, 2], 4, 'vertical')).toThrow(
    'You cannot place a ship over an existing ship or blasting area',
  );
});

it('throws error when placing ship over an existing blasting area', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([2, 2], 4, 'vertical');
  expect(() => gameboard.placeShip([3, 3], 4, 'vertical')).toThrow(
    'You cannot place a ship over an existing ship or blasting area',
  );
});

it('throws error when placing ship bigger than existing board space (vertical)', () => {
  const gameboard = new Gameboard();
  expect(() => gameboard.placeShip([9, 9], 2, 'vertical')).toThrow(
    'You cannot place ship outside the board',
  );
});

it('throws error when placing ship bigger than existing board space (horizontal)', () => {
  const gameboard = new Gameboard();
  expect(() => gameboard.placeShip([9, 9], 2, 'horizontal')).toThrow(
    'You cannot place ship outside the board',
  );
});

it('receives attack on coordinates with ship and records it', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'horizontal');
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.boardHits).toStrictEqual([
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it('calls the ship hit function when a ship is hit', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'vertical');
  gameboard.receiveAttack([0, 0]);
  const shipInfo = gameboard.allShipsInfo.find((s) => s.id === 1);
  expect(shipInfo.ship.positions).toStrictEqual([1, 0]);
});

it('records the coordinates of a missed shot', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.boardHits).toStrictEqual([
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it('it returns true when a ship is hit', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'vertical');
  expect(gameboard.receiveAttack([0, 0])).toBe(true);
});

it('it returns false when a hit is missed', () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack([0, 0])).toBe(false);
});

it('reports all ships have been sunk', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'vertical');
  gameboard.placeShip([0, 2], 2, 'vertical');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([0, 2]);
  gameboard.receiveAttack([1, 2]);
  expect(gameboard.allShipsSunk()).toBe(true);
});

it('reports not all ships have been sunk', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, 'vertical');
  gameboard.placeShip([0, 2], 2, 'vertical');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([0, 2]);
  expect(gameboard.allShipsSunk()).toBe(false);
});

it('throws error when attacking the same place twice', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  expect(() => gameboard.receiveAttack([0, 0])).toThrow('You cannot attack the same place twice');
});

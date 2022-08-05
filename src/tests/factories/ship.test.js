import Ship from '../../factories/ship';

test('if ship has length', () => {
  const ship = new Ship(null, 2, null);
  expect(ship.length).toBe(2);
});

it('throws error when ship is called with length < 1', () => {
  expect(() => new Ship(null, 0, null)).toThrow('Ship length must be > 0');
});

test('if ship is not sunk', () => {
  const ship = new Ship(null, 2, null);
  expect(ship.isSunk()).toBe(false);
});

test('if ship is sunk when all positions are hit', () => {
  const ship = new Ship(null, 2, null);
  ship.positions = [1, 1];
  expect(ship.isSunk()).toBe(true);
});

test('if ship is not sunk after calling hit once', () => {
  const ship = new Ship(null, 2, null);
  ship.hit(0);
  expect(ship.isSunk()).toBe(false);
});

test('if ship is sunk after calling hit for all positions', () => {
  const ship = new Ship(null, 2, null);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});

test('if ship has coordinates', () => {
  const ship = new Ship([0, 0], 1, null);
  expect(ship.coord).toEqual([0, 0]);
});

test('if ship has orientation', () => {
  const ship = new Ship(null, 1, 'horizontal');
  expect(ship.orientation).toBe('horizontal');
});

import Ship from '../../factories/ship';

test('if ship has length', () => {
  const ship = new Ship(2);
  expect(ship.length).toBe(2);
});

it('throws error when ship is called with length < 1', () => {
  expect(() => new Ship(0)).toThrow('Ship length must be > 0');
});

test('if ship is not sunk', () => {
  const ship = new Ship(2);
  expect(ship.isSunk()).toBe(false);
});

test('if ship is sunk when all positions are hit', () => {
  const ship = new Ship(2);
  ship.positions = [1, 1];
  expect(ship.isSunk()).toBe(true);
});

test('if ship is not sunk after calling hit once', () => {
  const ship = new Ship(2);
  ship.hit(0);
  expect(ship.isSunk()).toBe(false);
});

test('if ship is sunk after calling hit for all positions', () => {
  const ship = new Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});

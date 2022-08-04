import ComputerPlayer from '../../factories/computer-player';
import Gameboard from '../../factories/gameboard';

test('computer player plays random coordinates', () => {
  const enemyGameboard = new Gameboard();
  const computerPlayer = new ComputerPlayer(enemyGameboard);
  computerPlayer.randomAttackEnemy();
  const boardHitsSingleArray = enemyGameboard.boardHits
    .reduce((a, b) => a.concat(b), []);
  expect(boardHitsSingleArray).toContain(-1);
});

test('computer player always hits a valid spot', () => {
  const enemyGameboard = new Gameboard();
  const computerPlayer = new ComputerPlayer(enemyGameboard);
  for (let i = 0; i < 100; i += 1) {
    computerPlayer.randomAttackEnemy();
  }
  expect(enemyGameboard.boardHits).toStrictEqual([
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ]);
});

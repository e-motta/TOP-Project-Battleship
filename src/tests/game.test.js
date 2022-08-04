import Game from '../game';

it('sets up a new game with regular player and computer player', () => {
  const game = new Game();
  expect(game.player !== undefined);
  expect(game.computer !== undefined);
});

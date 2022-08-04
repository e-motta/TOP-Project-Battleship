const views = (() => {
  const createBoard = (player) => {
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');
    for (let i = 0; i < 100; i += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (player === 'computer') square.classList.add('clickable-square');
      if (player === 'player') square.classList.add('player-square');
      if (i >= 90) square.classList.add('square-bottom');
      if ((i - 9) % 10 === 0) square.classList.add('square-right');
      square.setAttribute('data-id', i);
      square.setAttribute('coords', String(i).padStart(2, '0'));
      gameboard.appendChild(square);
    }
    return gameboard;
  };

  const displayBoards = () => {
    const gameboardContainer = document.querySelector('.gameboards-container');
    gameboardContainer.innerHTML = '';

    const playerGameBoardName = document.createElement('h2');
    playerGameBoardName.textContent = 'Your board';
    const playerGameboard = createBoard('player');
    playerGameboard.classList.add('player-gameboard');
    gameboardContainer.appendChild(playerGameBoardName);
    gameboardContainer.appendChild(playerGameboard);

    const computerGameBoardName = document.createElement('h2');
    computerGameBoardName.textContent = "Computer's board";
    const computerGameBoard = createBoard('computer');
    computerGameBoard.classList.add('computer-gameboard');
    gameboardContainer.appendChild(computerGameBoardName);
    gameboardContainer.appendChild(computerGameBoard);
  };

  const displayShips = (allShipsCoords, player) => {
    allShipsCoords.forEach((shipCoords) => {
      shipCoords.forEach((coord) => {
        const [x, y] = coord;
        const square = document.querySelector(`.${player}-square[coords="${x}${y}"]`);
        square.classList.add('ship');
        square.setAttribute('draggable', 'true');
      });
    });
  };

  const displayScore = (gameboard, player) => {
    const score = document.createElement('div');
    score.classList.add(`${player}-score`);
    score.classList.add('score');

    const shipsInfo = gameboard.allShipsInfo.sort(
      (a, b) => b.ship.length - a.ship.length,
    );

    shipsInfo.forEach(((info) => {
      const ship = document.createElement('div');
      ship.classList.add('score-ship');
      ship.classList.add(`score-ship-${info.ship.length}`);
      if (info.ship.isSunk()) ship.classList.add('score-ship-sunk');
      score.appendChild(ship);
    }));

    const oldScore = document.querySelector(`.${player}-score`);
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.replaceChild(score, oldScore);

    const content = document.querySelector('.content');
    content.appendChild(scoreContainer);
  };

  const startNewGame = () => {
    window.location.reload();
  };

  const showGameoverMessage = (winner) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    const message = document.createElement('p');
    message.textContent = winner === 'player' ? 'You win!' : 'You lost!';
    messageContainer.appendChild(message);

    modal.appendChild(messageContainer);

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Start new game';
    btn.addEventListener('click', startNewGame);

    modal.appendChild(btn);

    const content = document.querySelector('.gameboards-container');
    content.appendChild(modal);
  };

  const listenForAttacks = (game) => {
    const computerSquares = document.querySelectorAll('.clickable-square');

    const playerAttack = (e) => {
      e.target.removeEventListener('click', playerAttack);
      e.target.classList.remove('clickable-square');

      const [x, y] = [
        Number(e.target.getAttribute('coords')[0]),
        Number(e.target.getAttribute('coords')[1]),
      ];

      game.runGameLoop([x, y]);
    };

    computerSquares.forEach((sqr) => {
      sqr.addEventListener('click', playerAttack);
    });
  };

  const hitSquare = (coords, opponent, hit) => {
    const square = document.querySelector(
      `.${opponent}-gameboard [coords="${coords[0]}${coords[1]}"]`,
    );
    if (hit) {
      square.classList.add('hit-ship');
      const span = document.createElement('span');
      span.classList.add('iconify');
      span.setAttribute('data-icon', 'mdi-close');
      square.appendChild(span);
    } else {
      square.classList.add('miss-ship');
      const span = document.createElement('span');
      span.classList.add('iconify');
      span.setAttribute('data-icon', 'mdi-circle');
      square.appendChild(span);
    }
  };

  const disableClicks = () => {
    const cover = document.createElement('div');
    cover.classList.add('cover');

    const computerGameboard = document.querySelector('.computer-gameboard');
    computerGameboard.appendChild(cover);
  };

  const enableClicks = () => {
    const cover = document.querySelector('.cover');
    const computerGameboard = document.querySelector('.computer-gameboard');

    computerGameboard.removeChild(cover);
  };

  return {
    displayBoards,
    displayShips,
    displayScore,
    showGameoverMessage,
    listenForAttacks,
    hitSquare,
    disableClicks,
    enableClicks,
  };
})();

export default views;

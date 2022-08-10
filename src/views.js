const views = (() => {
  const createBoard = (player) => {
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');
    gameboard.classList.add(`${player}-gameboard`);
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
    gameboardContainer.appendChild(playerGameBoardName);
    gameboardContainer.appendChild(playerGameboard);

    const computerGameBoardName = document.createElement('h2');
    computerGameBoardName.textContent = "Computer's board";
    const computerGameBoard = createBoard('computer');
    gameboardContainer.appendChild(computerGameBoardName);
    gameboardContainer.appendChild(computerGameBoard);

    const randomBtn = document.createElement('button');
    randomBtn.classList.add('random-btn');
    randomBtn.textContent = 'Randomize ships';
    const container = document.querySelector('.player-score');
    container.appendChild(randomBtn);
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

  const removeShips = (player) => {
    const allSquares = document.querySelectorAll(`.${player}-square`);
    allSquares.forEach((square) => {
      square.classList.remove('ship');
    });
  };

  const listenForRandomPlaceShips = (game) => {
    const randomBtn = document.querySelector('.random-btn');
    randomBtn.addEventListener('click', () => {
      game.playerGameboard.resetAllShips();
      game.playerGameboard.randomPlaceAllShips();
      const allShipsCoords = game.playerGameboard.allShipsInfo.map(
        (info) => info.ship.coords,
      );
      removeShips('player');
      displayShips(allShipsCoords, 'player');
    });
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

  const initialMessage = () => {
    disableClicks();
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    messageContainer.classList.add('initial-message');

    const message = document.createElement('h2');
    const span = document.createElement('span');
    span.classList.add('iconify');
    span.setAttribute('data-icon', 'mdi-arrow-left');
    message.appendChild(span);
    message.appendChild(document.createTextNode(' Place your ships on the gameboard'));
    messageContainer.appendChild(message);

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('start-btn');
    btn.textContent = 'Start game';
    messageContainer.appendChild(btn);
    const cover = document.querySelector('.cover');
    cover.appendChild(messageContainer);

    const startGame = () => {
      enableClicks();
      const playerGameboard = document.querySelector('.player-gameboard');
      const playerCover = document.createElement('div');
      playerCover.classList.add('player-cover');
      playerGameboard.appendChild(playerCover);

      const btnContainer = document.querySelector('.player-score');
      const randomBtn = document.querySelector('.random-btn');
      btnContainer.removeChild(randomBtn);
    };

    btn.addEventListener('click', startGame);
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

  const restartGame = () => {
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
    btn.textContent = 'New game';
    btn.addEventListener('click', restartGame);

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

  return {
    listenForRandomPlaceShips,
    disableClicks,
    enableClicks,
    initialMessage,
    displayBoards,
    displayShips,
    displayScore,
    showGameoverMessage,
    listenForAttacks,
    hitSquare,
  };
})();

export default views;

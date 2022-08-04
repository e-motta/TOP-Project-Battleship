class Player {
  constructor(enemyGameboard) {
    this.enemyGameboard = enemyGameboard;
  }

  attackEnemy = (coord) => this.enemyGameboard.receiveAttack(coord);
}

export default Player;

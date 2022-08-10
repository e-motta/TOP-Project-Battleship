import Player from './player';

class ComputerPlayer extends Player {
  randomAttackEnemy = () => {
    const coords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    let hit;
    try {
      hit = this.attackEnemy(coords);
    } catch (error) {
      if (error.message === 'You cannot attack the same place twice') {
        return this.randomAttackEnemy();
      }
      throw error;
    }
    return { coords, hit };
  };
}

export default ComputerPlayer;

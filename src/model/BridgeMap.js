const { GAME_SETTINGS } = require('../constant/GameSettings');

class BridgeMap {
  #maps = {
    U: [GAME_SETTINGS.bridgeStart],
    D: [GAME_SETTINGS.bridgeStart],
  };

  getMaps() {
    return this.#maps;
  }

  pushShape(direction, IS_CORRECT_MOVING) {
    this.pushDividingLine();
    const shape = IS_CORRECT_MOVING ? GAME_SETTINGS.canMove : GAME_SETTINGS.cannotMove;
    const notSelectedDirection = GAME_SETTINGS.oppositeDirection[direction];
    this.#maps[direction].push(shape);
    this.#maps[notSelectedDirection].push(GAME_SETTINGS.notSelect);
  }

  pushDividingLine() {
    if (this.#maps.U.length === 1) {
      return;
    }

    this.#maps.U.push(GAME_SETTINGS.bridgeDividingLine);
    this.#maps.D.push(GAME_SETTINGS.bridgeDividingLine);
  }
}

module.exports = BridgeMap;

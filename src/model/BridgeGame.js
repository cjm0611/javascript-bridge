const { GAME_SETTINGS } = require('../constant/GameSettings');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #map;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getMap() {
    return this.#map;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const index = this.#map.length();
    const answerShape = this.#bridge[index];
    const IS_CORRECT_MOVING = answerShape === moving;
    this.mapPushShape(IS_CORRECT_MOVING);
    return { IS_CORRECT_MOVING };
  }

  mapPushShape(IS_CORRECT_MOVING) {
    if (IS_CORRECT_MOVING) {
      this.#map.push(GAME_SETTINGS.canMove);
      return;
    }

    this.#map.push(GAME_SETTINGS.cannotMove);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;

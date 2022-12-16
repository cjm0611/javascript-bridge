/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movingIndex = 0;
  #numberOfAttempts = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const answerShape = this.#bridge[this.#movingIndex];

    const CAN_CONTIUE_CROSS = answerShape === moving;
    const IS_LEFT_BRIDGE = this.#movingIndex < this.#bridge.length - 1;

    this.#movingIndex += 1;
    return { CAN_CONTIUE_CROSS, IS_LEFT_BRIDGE };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#movingIndex = 0;
    this.#numberOfAttempts += 1;
  }
}

module.exports = BridgeGame;

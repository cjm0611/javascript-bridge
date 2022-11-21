const { BRIDGE_CONSTANTS } = require('./GameConstants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;
  #upMap = [BRIDGE_CONSTANTS.shapeOfBeginning];
  #downMap = [BRIDGE_CONSTANTS.shapeOfBeginning];
  #numberOfAttempts = 1;

  setBridgeAnswer(bridge) {
    this.#bridgeAnswer = bridge;
  }

  getBridgeAnswer() {
    return this.#bridgeAnswer;
  }

  getMaps() {
    return [this.#upMap, this.#downMap];
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, index) {
    this.pushDividingLine(index);
    const answerShape = this.#bridgeAnswer[index];
    const IS_MOVE = (moving === answerShape);
    if (moving === BRIDGE_CONSTANTS.up) {
      return this.selectUp(IS_MOVE);
    }

    return this.selectDown(IS_MOVE);
  }

  pushDividingLine(index) {
    if (index === 0) {
      return;
    }

    this.#upMap.push(BRIDGE_CONSTANTS.dividingLine);
    this.#downMap.push(BRIDGE_CONSTANTS.dividingLine);
  }

  selectUp(IS_MOVE) {
    this.#downMap.push(BRIDGE_CONSTANTS.notSelect);
    if (IS_MOVE) {
      this.#upMap.push(BRIDGE_CONSTANTS.success);
      return IS_MOVE;
    }

    this.#upMap.push(BRIDGE_CONSTANTS.failure);
    return IS_MOVE;
  }

  selectDown(IS_MOVE) {
    this.#upMap.push(BRIDGE_CONSTANTS.notSelect);
    if (IS_MOVE) {
      this.#downMap.push(BRIDGE_CONSTANTS.success);
      return IS_MOVE;
    }

    this.#downMap.push(BRIDGE_CONSTANTS.failure);
    return IS_MOVE;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#numberOfAttempts += 1;
    this.#upMap = [BRIDGE_CONSTANTS.shapeOfBeginning];
    this.#downMap = [BRIDGE_CONSTANTS.shapeOfBeginning];
  }
}

module.exports = BridgeGame;

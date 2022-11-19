const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGES } = require('./Messages');
const { BRIDGE_CONSTANTS } = require('./GameConstants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(GAME_MESSAGES.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(maps) {
    const upMap = maps[0].join('') + BRIDGE_CONSTANTS.shapeOfEnd;
    const downMap = maps[1].join('') + BRIDGE_CONSTANTS.shapeOfEnd;
    Console.print(upMap);
    Console.print(downMap);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(maps, IS_SUCCESS, numberOfAttempts) {
    Console.print(GAME_MESSAGES.result);
    this.printMap(maps);
    const successOrFailure = IS_SUCCESS ? '성공' : '실패';
    Console.print(GAME_MESSAGES.successOrFailure + successOrFailure);
    Console.print(GAME_MESSAGES.totalAttempts + numberOfAttempts);
  },
};

module.exports = OutputView;

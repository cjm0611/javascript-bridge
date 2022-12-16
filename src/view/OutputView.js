const { Console } = require('@woowacourse/mission-utils');
const { GAME_SETTINGS } = require('../constant/GameSettings');
const { GUIDE_MESSAGES } = require('../constant/Messages');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upMap, downMap) {
    Console.print(upMap.join('') + GAME_SETTINGS.bridgeEnd);
    Console.print(downMap.join('') + GAME_SETTINGS.bridgeEnd);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(IS_CLEAR_GAME, maps, numberOfAttempts) {
    Console.print(GUIDE_MESSAGES.finalResult);
    const { upMap, downMap } = maps;
    this.printMap(upMap, downMap);
    const clearOrNotMessage = IS_CLEAR_GAME ? GUIDE_MESSAGES.gameClear : GUIDE_MESSAGES.gameOver;
    Console.print(clearOrNotMessage);
    Console.print(GUIDE_MESSAGES.numberOfAttempts(numberOfAttempts));
  },
};

module.exports = OutputView;

const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');

class BridgeGameController {
  start() {
    Console.print(MESSAGES.gameStart);
  }
}

module.exports = BridgeGameController;

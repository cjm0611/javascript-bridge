const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');

class BridgeGameController {
  start() {
    Console.print(MESSAGES.gameStart);
    this.makeBridge();
  }

  makeBridge() {
    const onDeliveryBridgeSize = (size) => {};
    InputView.readBridgeSize(onDeliveryBridgeSize);
  }
}

module.exports = BridgeGameController;

const { Console } = require('@woowacourse/mission-utils');
const { GUIDE_MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');

class BridgeGameController {
  start() {
    Console.print(GUIDE_MESSAGES.gameStart);
    this.makeBridge();
  }

  makeBridge() {
    const onDeliveryBridgeSize = (size) => {};
    InputView.readBridgeSize(onDeliveryBridgeSize);
  }
}

module.exports = BridgeGameController;

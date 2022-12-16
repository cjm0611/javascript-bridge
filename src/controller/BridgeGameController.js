const { Console } = require('@woowacourse/mission-utils');
const { GUIDE_MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class BridgeGameController {
  start() {
    Console.print(GUIDE_MESSAGES.gameStart);
    this.makeBridge();
  }

  makeBridge() {
    const onDeliveryBridgeSize = (size) => {
      BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    };

    InputView.readBridgeSize(onDeliveryBridgeSize);
  }
}

module.exports = BridgeGameController;

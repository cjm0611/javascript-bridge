const { Console } = require('@woowacourse/mission-utils');
const { GUIDE_MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');

class BridgeGameController {
  #game = new BridgeGame();

  start() {
    Console.print(GUIDE_MESSAGES.gameStart);
    this.makeBridge();
  }

  makeBridge() {
    const onDeliveryBridgeSize = (size) => {
      const generateRandomNumber = BridgeRandomNumberGenerator.generate;
      const bridge = BridgeMaker.makeBridge(Number(size), generateRandomNumber);
      this.#game.setBridge(bridge);
      this.crossBridge();
    };

    InputView.readBridgeSize(onDeliveryBridgeSize);
  }

  crossBridge() {
    const onDeliveryMoving = (moving) => {
      this.#game.move(moving);
    };

    InputView.readMoving(onDeliveryMoving);
  }
}

module.exports = BridgeGameController;

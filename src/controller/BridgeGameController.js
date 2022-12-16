const { Console } = require('@woowacourse/mission-utils');
const { GUIDE_MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');
const BridgeMap = require('../model/BridgeMap');

class BridgeGameController {
  #game = new BridgeGame();
  #map = new BridgeMap();

  start() {
    Console.print(GUIDE_MESSAGES.gameStart);
    this.makeBridge();
  }

  makeBridge() {
    const onDeliveryBridgeSize = (size) => {
      const generateRandomNumber = BridgeRandomNumberGenerator.generate;
      const bridge = BridgeMaker.makeBridge(Number(size), generateRandomNumber);
      console.log('정답 : ', bridge);
      this.#game.setBridge(bridge);
      this.crossBridge();
    };

    InputView.readBridgeSize(onDeliveryBridgeSize);
  }

  crossBridge() {
    const onDeliveryMoving = (moving) => {
      const CAN_CONTIUE_CROSS = this.#game.move(moving);
      this.#map.pushShape(moving, CAN_CONTIUE_CROSS);
      this.oneMovingResult(CAN_CONTIUE_CROSS);
    };

    InputView.readMoving(onDeliveryMoving);
  }

  oneMovingResult(CAN_CONTIUE_CROSS) {
    this.printNowMap();

    if (CAN_CONTIUE_CROSS) {
      this.crossBridge();
      return;
    }

    this.failCrossBridge();
  }

  printNowMap() {
    const { U, D } = this.#map.getMaps();
    OutputView.printMap(U, D);
  }

  failCrossBridge() {
    const onDeliveryCommand = (command) => {};

    InputView.readGameCommand(onDeliveryCommand);
  }
}

module.exports = BridgeGameController;

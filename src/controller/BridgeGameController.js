const { Console } = require('@woowacourse/mission-utils');
const { GAME_SETTINGS } = require('../constant/GameSettings');
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
      const { CAN_CONTIUE_CROSS, IS_LEFT_BRIDGE } = this.#game.move(moving);
      this.#map.pushShape(moving, CAN_CONTIUE_CROSS);
      this.oneMovingResult(CAN_CONTIUE_CROSS, IS_LEFT_BRIDGE);
    };

    InputView.readMoving(onDeliveryMoving);
  }

  oneMovingResult(CAN_CONTIUE_CROSS, IS_LEFT_BRIDGE) {
    this.printNowMap();

    if (!CAN_CONTIUE_CROSS) {
      this.failCrossBridge();
      return;
    }

    if (CAN_CONTIUE_CROSS && IS_LEFT_BRIDGE) {
      this.crossBridge();
      return;
    }

    this.successCrossWholeBridge();
  }

  printNowMap() {
    const { U, D } = this.#map.getMaps();
    OutputView.printMap(U, D);
  }

  successCrossWholeBridge() {
    const IS_CLEAR_GAME = true;
    this.gameEnd(IS_CLEAR_GAME);
  }

  failCrossBridge() {
    const onDeliveryCommand = (command) => {
      this.retryOrQuit(command);
    };

    InputView.readGameCommand(onDeliveryCommand);
  }

  retryOrQuit(command) {
    if (command === GAME_SETTINGS.retry) {
      this.retryGame();
      return;
    }

    const IS_CLEAR_GAME = false;
    this.gameEnd(IS_CLEAR_GAME);
  }

  retryGame() {
    this.#game.retry();
    this.#map.retry();
    this.crossBridge();
  }

  gameEnd(IS_CLEAR_GAME) {
    const { U, D } = this.#map.getMaps();
    const numberOfAttempts = this.#game.getNumberOfAttempts();
    OutputView.printResult(IS_CLEAR_GAME, U, D, numberOfAttempts);
    Console.close();
  }
}

module.exports = BridgeGameController;

const BridgeGameController = require('./controller/BridgeGameController');

class App {
  #controller = new BridgeGameController();

  play() {
    this.#controller.start();
  }
}

module.exports = App;

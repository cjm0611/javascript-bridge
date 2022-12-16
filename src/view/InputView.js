const { Console } = require('@woowacourse/mission-utils');
const { GAME_SETTINGS } = require('../constant/GameSettings');
const { GUIDE_MESSAGES, ERROR_MESSAGES } = require('../constant/Messages');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(GUIDE_MESSAGES.bridgeSize, (size) => {
      this.validateBridgeSize(size, callback);
    });
  },

  validateBridgeSize(size, callback) {
    try {
      this.handleWrongSizeException(size);
      callback(size);
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  handleWrongSizeException(size) {
    this.handeWrongSizeTypeException(size);
    this.handleWrongSizeRange(size);
  },

  handeWrongSizeTypeException(size) {
    const IS_NUMBER = /^[0-9]+$/.test(size);
    if (!IS_NUMBER) {
      throw ERROR_MESSAGES.bridgeSizeType;
    }
  },

  handleWrongSizeRange(size) {
    if (size < GAME_SETTINGS.minLength || size > GAME_SETTINGS.maxLength) {
      throw ERROR_MESSAGES.bridgeSizeRange;
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(GUIDE_MESSAGES.moving, (moving) => {
      this.validateMoving(moving, callback);
    });
  },

  validateMoving(moving, callback) {
    try {
      this.handleWrongMovingException(moving);
      callback(moving);
    } catch (error) {
      Console.print(error);
      this.readMoving(callback);
    }
  },

  handleWrongMovingException(moving) {
    const movings = [GAME_SETTINGS.up, GAME_SETTINGS.down];
    if (!movings.includes(moving)) {
      throw ERROR_MESSAGES.moving;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(GUIDE_MESSAGES.command, (command) => {
      this.validateCommand(command, callback);
    });
  },

  validateCommand(command, callback) {
    try {
      this.handleWrongCommandException(command);
      callback(command);
    } catch (error) {
      Console.print(error);
      this.readGameCommand(callback);
    }
  },

  handleWrongCommandException(command) {
    const commands = [GAME_SETTINGS.retry, GAME_SETTINGS.quit];
    if (!commands.includes(command)) {
      throw ERROR_MESSAGES.command;
    }
  },
};

module.exports = InputView;

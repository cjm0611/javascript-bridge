const { GAME_SETTINGS } = require('./GameSettings');

const GUIDE_MESSAGES = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
});

const ERROR_MESSAGES = Object.freeze({
  bridgeSizeType: `${GAME_SETTINGS} 숫자만 입력해주세요.`,
  bridgeSizeRange: `${GAME_SETTINGS} 3 이상 20 이하의 자연수를 입력해주세요.`,
});

module.exports = { GUIDE_MESSAGES, ERROR_MESSAGES };

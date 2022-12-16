const { GAME_SETTINGS } = require('./GameSettings');

const GUIDE_MESSAGES = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: `이동할 칸을 선택해주세요. (위: ${GAME_SETTINGS.up}, 아래: ${GAME_SETTINGS.down})\n`,
});

const ERROR_MESSAGES = Object.freeze({
  bridgeSizeType: `${GAME_SETTINGS.error} 숫자만 입력해주세요.`,
  bridgeSizeRange: `${GAME_SETTINGS.error} 3 이상 20 이하의 자연수만 입력해주세요.`,
  moving: `${GAME_SETTINGS.error} ${GAME_SETTINGS.up} 또는 ${GAME_SETTINGS.down}를 입력해주세요.`,
});

module.exports = { GUIDE_MESSAGES, ERROR_MESSAGES };

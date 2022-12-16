const GAME_SETTINGS = Object.freeze({
  minLength: 3,
  maxLength: 20,
  up: 'U',
  down: 'D',
  error: '[ERROR]',
});

const MAPPING_BRIDGE_SHAPE = Object.freeze({
  0: 'D',
  1: 'U',
});

module.exports = { GAME_SETTINGS, MAPPING_BRIDGE_SHAPE };

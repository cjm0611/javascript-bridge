const InputView = require('../src/view/InputView');
const { ERROR_MESSAGES } = require('../src/constant/Messages');

describe('이동할 칸 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], [' U'], [' D']])('공백 포함 입력인 경우', (input) => {
    expect(() => {
      InputView.handleWrongMovingException(input);
    }).toThrow(ERROR_MESSAGES.moving);
  });

  test.each([['u'], ['d'], ['Z']])('다른 문자가 입력된 경우', (input) => {
    expect(() => {
      InputView.handleWrongMovingException(input);
    }).toThrow(ERROR_MESSAGES.moving);
  });
});

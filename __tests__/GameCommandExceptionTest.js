const InputView = require('../src/view/InputView');
const { ERROR_MESSAGES } = require('../src/constant/Messages');

describe('재시작/종료 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], [' R'], [' Q']])('공백 포함 입력인 경우', (input) => {
    expect(() => {
      InputView.handleWrongCommandException(input);
    }).toThrow(ERROR_MESSAGES.command);
  });

  test.each([['r'], ['q'], ['U'], ['D'], ['Z']])('다른 문자가 입력된 경우', (input) => {
    expect(() => {
      InputView.handleWrongCommandException(input);
    }).toThrow(ERROR_MESSAGES.command);
  });
});

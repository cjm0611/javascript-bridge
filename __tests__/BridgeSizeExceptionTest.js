const InputView = require('../src/view/InputView');
const { ERROR_MESSAGES } = require('../src/constant/Messages');

describe('다리 길이 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], ['-3'], ['3.5'], ['1 3'], ['1e3']])(
    '숫자만 입력된 것이 아닌 경우',
    (input) => {
      expect(() => {
        InputView.handleWrongSizeException(input);
      }).toThrow(ERROR_MESSAGES.bridgeSizeType);
    },
  );

  test.each([['0'], ['2'], ['21']])('범위가 잘못된 경우', (input) => {
    expect(() => {
      InputView.handleWrongSizeException(input);
    }).toThrow(ERROR_MESSAGES.bridgeSizeRange);
  });
});

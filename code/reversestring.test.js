const reverseString = require('./reversestring');

describe('reverseString tests', () => {
  test('reverseString functions exists', () => {
    expect(reverseString).toBeDefined();
  });

  test('String reverses', () => {
    expect(reverseString('abcd')).toEqual('dcba');
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
  });

  test('String reverses with upper case', () => {
    expect(reverseString('Abcd')).toEqual('dcba');
    expect(reverseString('hEllo')).toEqual('olleh');
    expect(reverseString('woRld')).toEqual('dlrow');
  });
});

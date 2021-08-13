const isAnagram = require('./anagram');

describe('Testing anagram function', () => {
  test('function defined', () => {
    expect(isAnagram).toBeDefined();
  });

  test('"Jim Morrison" is an anagram of "Mr. Mojo Risin"', () => {
    expect(isAnagram('Jim Morrison', 'Mr. Mojo Risin')).toBeTruthy();
  });

  test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
  });

  test('Hello is NOT an anagram of Aloha', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
  });
});

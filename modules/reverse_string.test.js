const reverseString = require('./reverse_string.js');

test('reverseString function should reverse the string "swing"', () => {
  expect(reverseString('swing')).toBe('gniws');
});

test('reverseString function should throw an error if the string is empty', () => {
  expect(() => {
    reverseString('');
  }).toThrow(Error('Cannot reverse an empty string'));
});

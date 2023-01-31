const reverseString = require('./reverseString.js');

test('swing', () => {
  expect(reverseString('swing')).toBe('gniws');
});

test('throw error if the string is empty', () => {
  expect(reverseString('')).toBe('cannot reverse an empty string');
});

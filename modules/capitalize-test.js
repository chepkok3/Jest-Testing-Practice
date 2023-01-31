const capitalize = require('./capitalize.js');

test('string developer should be Developer', () => {
  expect(capitalize('developer')).toBe('Developer');
});

test('Invalid format of the string 0developer', () => {
  expect(capitalize('0developer')).toBe('Invalid format');
});

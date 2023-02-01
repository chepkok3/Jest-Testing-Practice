const stringLength = require('./string_length.js');

test('stringLength function should return the length of the string "Strike"', () => {
  expect(stringLength('Strike')).toBe(6);
});

test('stringLength function should throw an error if the input string has more than 10 characters', () => {
  expect(() => {
    stringLength('Instruction');
  }).toThrow(Error('Input string length must be between 1 and 10'));
});

test('stringLength function should throw an error if the input string is an empty string', () => {
  expect(() => {
    stringLength('');
  }).toThrow(Error('Input string length must be between 1 and 10'));
});

const stringLength = (string) => string.length;

test('Strike has 6 characters', () => {
  expect(stringLength('Strike')).toBe(6);
});

test('If the string has ore than 10 characters', () => {
  expect(stringLength('Introduction')).toBe(
    'The characters exceed the expected number',
  );
});

test('character is 1 letter ', () => {
  expect(stringLength('')).toBe('The character is less than the expected');
});

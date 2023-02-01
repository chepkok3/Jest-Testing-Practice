const calculator = require('./calculator');

describe('adding', () => {
  test('4 plus 2 is 6', () => {
    expect(calculator.add(4, 2)).toBe(6);
  });

  test('0 and 0 not correct', () => {
    expect(calculator.add(0, 0)).toBe('The x & y values are 0');
  });

  test('8 plus 0 equals 8', () => {
    expect(calculator.add(8, 0)).toBe(8);
  });
});

describe('substracting', () => {
  test('7 subract 4 is 3', () => {
    expect(calculator.substract(7, 4)).toBe(3);
  });

  test('6 minus 0 not correct', () => {
    expect(calculator.substract(6, 0)).toBe('Result remains ${x}');
  });

  test('3 minus 5 equals -2', () => {
    expect(calculator.substract(3, 5)).toBe(-2);
  });
});

describe('dividing', () => {
  test('8 divided by 4 is 2', () => {
    expect(calculator.devide(8, 4)).toBe(2);
  });

  test('7 divided by 0 is 0', () => {
    expect(calculator.devide(7, 0)).toBe('y value is 0, the result remains 0');
  });

  test('15 divided by 8 equals 1.875 which is a float', () => {
    expect(calculator.devide(15, 8)).toBe(1.875);
  });

  test('15 divided by -8 equals -1.875, negative float', () => {
    expect(calculator.devide(-15, 8)).toBe(-1.875);
  });
});

describe('multiplying', () => {
  test('4 multiplied by 4 is 16', () => {
    expect(calculator.multiply(4, 4)).toBe(16);
  });

  test('7 multiplied by 0 is 0', () => {
    expect(calculator.multiply(7, 0)).toBe('result remains ${y}');
  });

  test('8 multiplied by 8 equals 64', () => {
    expect(calculator.multiply(8, 8)).toBe(64);
  });

  test('0.52 multiplied by 6 equals 3.12', () => {
    expect(calculator.multiply(0.52, 6)).toBe(3.12);
  });
});

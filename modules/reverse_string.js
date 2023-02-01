const reverseString = (r_str) => {
  if (r_str === null || r_str === undefined) {
    throw new Error('Input string cannot be null or undefined');
  }
  if (r_str.length === 0) {
    throw new Error('Cannot reverse an empty string');
  }
  return r_str.split('').reverse().join('');
};

module.exports = reverseString;

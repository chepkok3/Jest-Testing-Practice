const stringLength = (string) => {
  if (string === null || string === undefined) {
    throw new Error('Input string cannot be null or undefined');
  }
  if (string.length < 1 || string.length > 10) {
    throw new Error('Input string length must be between 1 and 10');
  }
  return string.length;
};

module.exports = stringLength;

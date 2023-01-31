const reverseString = (str) => {
  if (str.length > 0) {
    return str.split('').reverse().join('');
  }
  return 'Cannot return an empty string';
};

module.exports = reverseString;

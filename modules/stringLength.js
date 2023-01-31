const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
  return 'the output is incorrect';
};
module.exports = stringLength;

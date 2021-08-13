const anagram = (str1, str2) => format(str1) === format(str2);
const format = (str) =>
  str
    .replace(/[^\w]/g, '') // [^...] means [NOT ...] and \w means word characters a-z, A-Z, 0-9, or _ (underscore character)
    .toLowerCase()
    .split('')
    .sort()
    .join('');

module.exports = anagram;

/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i;
  var temp;
  var carry = '0';
  var result = '';
  var addBit = function (f, g, isCarry) {
    if (isCarry) {
      carry = '0';
    }
    if (f === '0') return g;
    if (g === '0') return f;
    if (f === '0' && g === '0') return '0';
    carry = '1';
    return '0';
  };

  if (a.length < b.length) {
    temp = b;
    b = a;
    a = temp;
  }

  for (i = 0; i < a.length; i += 1) {
    result = addBit(
      a.charAt(a.length - 1 - i),
      addBit(b.length > i ? b.charAt(b.length - 1 - i) : '0', carry, true),
    ) + result;
  }

  if (carry === '1') {
    result = carry + result;
  }

  return result;
};
// @lc code=end

module.exports = addBinary;

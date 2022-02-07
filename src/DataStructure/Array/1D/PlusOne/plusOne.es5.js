/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var i;
  for (i = digits.length - 1; i >= 0; i--) {
    var digit = digits[i];
    if (digit === 9)  {
      digits[i] = 0;
    } else {
      digits[i] = digit + 1;
      return digits;
    }
  }
  // shift digits to right by 1
  digits.push(1);
  var temp;
  for (i = 0; i < digits.length - 1; i++) {
    temp = digits[i + 1];
    digits[i + 1] = digits[i];
  }
  digits[0] = temp;
  return digits;
};
// @lc code=end

module.exports = plusOne;
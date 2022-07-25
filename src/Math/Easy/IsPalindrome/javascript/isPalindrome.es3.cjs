/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var left = x;
  var reversed = 0;
  if (x < 0) return false;
  if (x < 10) return true;
  if (x === 10) return false;
  while (left > 9) {
    reversed = reversed * 10 + (left % 10);
    left = Math.floor(left / 10);
  }
  reversed = reversed * 10 + left;
  return x === reversed;
};
// @lc code=end

module.exports = isPalindrome;

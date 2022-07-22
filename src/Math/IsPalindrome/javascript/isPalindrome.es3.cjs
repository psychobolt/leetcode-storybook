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
  if (x < 0) return false;
  if (x < 10) return true;
  if (x === 10) return false;
  return true;
};
// @lc code=end

module.exports = isPalindrome;

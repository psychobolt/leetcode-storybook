/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var left = 0;
  var right = num;
  var mid;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    if (mid * mid === num) {
      return true;
    }
    if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end

module.exports = isPerfectSquare;

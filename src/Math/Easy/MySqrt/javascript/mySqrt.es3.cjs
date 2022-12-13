/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var left = 1;
  var right = x;
  var mid;
  var current;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    current = x / mid;
    if (current === mid) {
      return mid;
    }
    if (current < mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end

module.exports = mySqrt;

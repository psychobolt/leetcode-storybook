/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  var left = 0;
  var right = Math.abs(n);
  var result = 1;
  while (left < right) {
    if (right % 2 === 0) {
      x *= x;
      right /= 2;
    } else {
      right -= 1;
      result *= x;
    }
  }
  return Number.parseFloat((n < 0 ? 1 / result : result).toFixed(5));
}
// @lc code=end

module.exports = myPow;

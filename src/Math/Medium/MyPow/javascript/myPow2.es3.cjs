/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
var TCO = function (func) {
  this.func = func;
};

TCO.prototype.execute = function execute() {
  var result = this;
  while (result instanceof TCO) {
    result = result.func();
  }
  return result;
};

function helper(prev, x, n, inverse) {
  return new TCO(function pow() {
    if (n === 1) return inverse ? 1 / prev : prev;
    prev *= x;
    if (n % 2 === 0) {
      n /= 2;
      x *= x;
    } else {
      n -= 1;
    }
    return helper(prev, x, n, inverse);
  });
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n === 0) return 1.00000;
  return Number.parseFloat(helper(x, x, Math.abs(n), n < 0).execute().toFixed(5));
}
// @lc code=end

module.exports = myPow;

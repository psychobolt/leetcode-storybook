/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  var parent;
  if (n === 1) return 0;
  parent = kthGrammar(n - 1, Math.floor((k + 1) / 2));
  if (k % 2 === 0) return parent === 1 ? 0 : 1;
  return parent;
};
// @lc code=end

module.exports = kthGrammar;

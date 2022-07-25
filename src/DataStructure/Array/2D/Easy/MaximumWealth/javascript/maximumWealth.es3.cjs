/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  var i;
  var j;
  var sum;
  var largestSum = 0;
  for (i = 0; i < accounts.length; i += 1) {
    sum = 0;
    for (j = 0; j < accounts[i].length; j += 1) {
      sum += accounts[i][j];
    }
    if (sum > largestSum) {
      largestSum = sum;
    }
  }
  return largestSum;
};
// @lc code=end

module.exports = maximumWealth;

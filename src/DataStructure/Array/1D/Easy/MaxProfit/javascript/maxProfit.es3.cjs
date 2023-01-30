/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var left = 0; // buy
  var right = 1; // sell
  var max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      max = Math.max(prices[right] - prices[left], max);
    } else {
      left = right;
    }
    right += 1;
  }
  return max;
};
// @lc code=end

module.exports = maxProfit;

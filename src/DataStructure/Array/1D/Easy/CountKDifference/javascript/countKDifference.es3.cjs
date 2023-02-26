/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  var i;
  var j;
  var count = 0;
  for (i = 0; i < nums.length; i += 1) {
    for (j = i + 1; j < nums.length; j += 1) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count += 1;
      }
    }
  }
  return count;
};
// @lc code=end

module.exports = countKDifference;

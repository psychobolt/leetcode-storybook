/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  var i;
  var result = [];
  result.push(nums[0]);
  for (i = 1; i < nums.length; i += 1) {
    result.push(result[i - 1] + nums[i]);
  }
  return result;
};
// @lc code=end

module.exports = runningSum;

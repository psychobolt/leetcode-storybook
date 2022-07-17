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
  for (i = 0; i < nums.length; i += 1) {
    if (i === 0) {
      result.push(nums[i]);
    } else {
      result.push(result[i - 1] + nums[i]);
    }
  }
  return result;
};
// @lc code=end

module.exports = runningSum;

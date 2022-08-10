/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var result = [];
  var i;
  var left = 0;
  var right = nums.length - 1;
  for (i = nums.length - 1; i >= 0; i -= 1) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left += 1;
    } else {
      result[i] = nums[right] * nums[right];
      right -= 1;
    }
  }
  return result;
};
// @lc code=end

module.exports = sortedSquares;

/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var i;
  var j = 0;
  for (i = j; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  for (i = j; i < nums.length; i += 1) {
    nums[i] = 0;
  }
  return nums;
};
// @lc code=end

module.exports = moveZeroes;

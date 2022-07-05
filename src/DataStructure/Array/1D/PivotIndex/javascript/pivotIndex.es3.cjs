/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  var i;
  var total = 0;
  var left = 0;
  var right;
  for (i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }
  for (i = 0; i < nums.length; i += 1) {
    right = total - nums[i] - left;
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

// @lc code=end

module.exports = pivotIndex;

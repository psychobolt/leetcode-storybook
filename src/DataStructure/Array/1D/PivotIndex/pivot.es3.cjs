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
var pivotIndex = function pivotIndex(nums) {
  var i;
  var a;
  var b;
  var left;
  var right;
  for (i = 0; i < nums.length; i += 1) {
    left = 0;
    right = 0;
    for (a = 0; a < i; a += 1) {
      left += nums[a];
    }
    for (b = i + 1; i < b && b < nums.length; b += 1) {
      right += nums[b];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};

// @lc code=end

module.exports = pivotIndex;

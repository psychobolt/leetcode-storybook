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
  var pivot;
  var i;
  var left;
  var right;
  for (pivot = 0; pivot < nums.length; pivot += 1) {
    left = 0;
    right = 0;
    // calculate left sum
    for (i = 0; i < pivot; i += 1) {
      left += nums[i];
    }
    // calculate right sum
    for (i = pivot + 1; i < nums.length; i += 1) {
      right += nums[i];
    }
    if (left === right) {
      return pivot;
    }
  }
  return -1;
};

// @lc code=end

module.exports = pivotIndex;

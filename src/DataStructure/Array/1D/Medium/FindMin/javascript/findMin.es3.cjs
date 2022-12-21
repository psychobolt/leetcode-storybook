/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else { // nums[mid] <= nums[right]
      right = mid;
    }
  }
  return nums[left];
};
// @lc code=end

module.exports = findMin;

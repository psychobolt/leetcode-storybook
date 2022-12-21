/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
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
    } else if (mid !== left && nums[mid] === nums[left]) {
      left += 1;
    } else if (mid !== right && nums[mid] === nums[right]) {
      right -= 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
// @lc code=end

module.exports = findMin;

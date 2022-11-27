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
  if (nums[left] < nums[right]) return nums[left];
  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[left] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
};
// @lc code=end

module.exports = findMin;

/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  var current;
  var min;
  var max;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    current = nums[mid];
    if (current === target) return mid;
    min = nums[left];
    if (min <= current) {
      if (min <= target && target < current) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      max = nums[right];
      if (current < target && target <= max) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end

module.exports = search;

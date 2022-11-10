/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
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
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    current = nums[mid];
    if (current === target) {
      return mid;
    }
    if (current < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// @lc code=end

module.exports = search;

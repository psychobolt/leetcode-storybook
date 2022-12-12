/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  while (left + 1 < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return nums[left] < nums[right] ? right : left;
};
// @lc code=end

module.exports = findPeakElement;

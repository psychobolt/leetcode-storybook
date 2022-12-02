/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  while (left + 1 < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] === target) {
      if (nums[left] === target && nums[right] === target) return [left, right];
      if (nums[left] < target) left += 1;
      if (target < nums[right]) right -= 1;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target && nums[right] === target) return [left, right];
  if (nums[left + 1] === target && nums[right] === target) return [left + 1, right];
  if (nums[left] === target && nums[right - 1] === target) return [left, right - 1];
  return [-1, -1];
};
// @lc code=end

module.exports = searchRange;

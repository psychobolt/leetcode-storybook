/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var left;
  var right = n - 1;
  var mid = Math.round((m + n) / 2);
  var lastIndex = nums1.length - 1;
  for (left = 0; left < mid && right >= 0; left += 1, right -= 1, lastIndex -= 1) {
    if (nums1[left] < nums2[right]) {
      nums1[lastIndex] = nums2[right];
    } else {
      nums1[lastIndex] = nums1[left];
      nums1[left] = nums2[right];
    }
  }
  return nums1;
};
// @lc code=end

module.exports = merge;

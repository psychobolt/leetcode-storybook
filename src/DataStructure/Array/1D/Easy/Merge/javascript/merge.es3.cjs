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
  var left = m - 1;
  var right = n - 1;
  var i;
  for (i = m + n - 1; i >= 0; i -= 1) {
    if (left < 0 || nums2[right] >= nums1[left]) {
      nums1[i] = nums2[right];
      right -= 1;
    } else if (right < 0 || nums2[right] < nums1[left]) {
      nums1[i] = nums1[left];
      if (right > 0) {
        nums1[left] = 0;
      }
      left -= 1;
    }
  }
  return nums1;
};
// @lc code=end

module.exports = merge;

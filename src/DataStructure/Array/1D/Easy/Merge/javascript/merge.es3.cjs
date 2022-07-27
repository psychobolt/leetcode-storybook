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
  var right;
  var lastIndex = nums1.length - 1;
  var temp;
  if (m === 0) {
    for (left = 0; left < n; left += 1) {
      nums1[left] = nums2[left];
    }
    return nums1;
  }
  if (n === 0) return nums1;
  for (right = n - 1; right >= 0; right -= 1, lastIndex -= 1) {
    if (nums2[right] > nums1[left]) {
      nums1[lastIndex] = nums2[right];
    } else {
      nums1[lastIndex] = nums1[left];
      nums1[left] = nums2[right];
    }
    if (left > 0) left -= 1;
  }
  if (nums1[m - 1] > nums1[m]) {
    temp = nums1[m];
    nums1[m] = nums1[m - 1];
    nums1[m - 1] = temp;
  }
  return nums1;
};
// @lc code=end

module.exports = merge;

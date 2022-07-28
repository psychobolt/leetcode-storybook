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
  var left = m;
  var right = n;
  var i;
  var temp;
  for (i = m + n - 1; nums1[i] === 0; i -= 1) {
    if (left > 0) left -= 1;
    if (right > 0) right -= 1;
    if (nums2[right] > nums1[left]) {
      nums1[i] = nums2[right];
    } else if (nums2[right] < nums1[left]) {
      nums1[i] = nums1[left];
      if (n < m) {
        nums1[left] = 0;
      } else {
        nums1[left] = nums2[right];
      }
    }
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

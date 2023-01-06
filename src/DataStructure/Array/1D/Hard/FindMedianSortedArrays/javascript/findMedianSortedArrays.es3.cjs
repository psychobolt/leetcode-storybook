/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var lastIndex1 = nums1.length - 1;
  var lastIndex2 = nums2.length - 1;
  var left = 0;
  var right = lastIndex1 + lastIndex2 + 1;
  var mid;
  var current;
  while (left + 1 < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (mid > lastIndex1) {
      mid -= nums1.length;
      current = nums2[mid];
    } else {
      current = nums1[mid];
    }
    if (nums1[left] > current && current < nums2[right - nums1.length]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left; //; right - nums1.length;
};
// @lc code=end

module.exports = findMedianSortedArrays;

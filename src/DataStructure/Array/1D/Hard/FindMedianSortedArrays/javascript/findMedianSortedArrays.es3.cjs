/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start

var INFINITY = 1000001;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var numsA = nums1;
  var numsB = nums2;
  var length = numsA.length + numsB.length;
  var half = Math.trunc((numsA.length + numsB.length) / 2);
  var left = 0;
  var leftA;
  var leftB;
  var right;
  var rightA;
  var rightB;
  var midA;
  var midB;
  if (nums1.length > nums2.length) {
    numsA = nums2;
    numsB = nums1;
  }
  right = numsA.length - 1;
  while (true) { // eslint-disable-line no-constant-condition
    midA = Math.floor((left + right) / 2);
    midB = half - midA - 2;

    leftA = midA >= 0 ? numsA[midA] : -INFINITY;
    rightA = midA + 1 < numsA.length ? numsA[midA + 1] : INFINITY;
    leftB = midB >= 0 ? numsB[midB] : -INFINITY;
    rightB = midB + 1 < numsB.length ? numsB[midB + 1] : INFINITY;

    if (leftA <= rightB && leftB <= rightA) {
      break;
    } else if (leftA > rightB) {
      right = midA - 1;
    } else {
      left = midA + 1;
    }
  }
  if (length % 2) {
    return Math.min(rightA, rightB);
  }
  return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0;
};
// @lc code=end

module.exports = findMedianSortedArrays;

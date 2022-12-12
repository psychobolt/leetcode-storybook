/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  var lastIndex = arr.length - 1;
  var left = 0;
  var right = lastIndex;
  var mid;
  var a;
  var b;
  var distA;
  var distB;

  while (left + 1 < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (arr[mid] < x) {
      left = mid;
    } else {
      right = mid;
    }
  }

  a = arr[left];
  b = arr[right];
  distA = Math.abs(a - x);
  distB = Math.abs(b - x);
  mid = distA < distB || (distA === distB && a < b) ? left : right;

  left = mid;
  right = mid;

  while ((right - left) + 1 < k) {
    if (left > 0) {
      a = arr[left - 1];
      distA = Math.abs(a - x);
    }
    if (right < lastIndex) {
      b = arr[right + 1];
      distB = Math.abs(b - x);
    }
    if (left === 0 && right < lastIndex) {
      right += 1;
    } else if (left > 0 && right === lastIndex) {
      left -= 1;
    } else if (distA < distB || (distA === distB && a < b)) {
      left -= 1;
    } else {
      right += 1;
    }
  }

  return arr.slice(left, right + 1);
};
// @lc code=end

module.exports = findClosestElements;

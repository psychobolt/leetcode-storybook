/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var left;
  var right;
  var mid;
  var i;
  var secondTarget;
  for (i = 0; i < numbers.length; i += 1) {
    secondTarget = target - numbers[i];
    left = i + 1;
    right = numbers.length - 1;
    while (left < right) {
      mid = left + Math.trunc((right - left) / 2);
      if (numbers[mid] === secondTarget) {
        return i > mid ? [mid + 1, i + 1] : [i + 1, mid + 1];
      }
      if (numbers[mid] < secondTarget) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (numbers[left] === secondTarget) {
      return i > left ? [left + 1, i + 1] : [i + 1, left + 1];
    }
  }
  return [left + 1, right + 1];
};
// @lc code=end

module.exports = twoSum;

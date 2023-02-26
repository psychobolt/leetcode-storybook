/*
 * @lc app=leetcode id=719 lang=javascript
 *
 * [719] Find K-th Smallest Pair Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  var lo;
  var hi;
  var mid;

  var good = function (target) {
    var count = 0;
    var i = 0;
    var j = 1;
    while (i < nums.length) {
      while (j < nums.length && nums[j] - nums[i] <= target) {
        j += 1;
      }
      count += j - i - 1; // n - 1 pairs
      i += 1;
    }
    return count >= k;
  };

  nums.sort((a, b) => a - b);
  lo = 0;
  hi = nums[nums.length - 1] - nums[0];

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);
    if (good(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo; // kth smallest distance
};
// @lc code=end

module.exports = smallestDistancePair;

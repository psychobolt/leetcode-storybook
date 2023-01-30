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

  var good = function (target) { // eslint-disable-line 
    var count = 0;
    return count >= k;
  };

  nums.sort();
  lo = nums[0];
  hi = nums[nums.length - 1];

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);
    if (good(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
// @lc code=end

module.exports = smallestDistancePair;

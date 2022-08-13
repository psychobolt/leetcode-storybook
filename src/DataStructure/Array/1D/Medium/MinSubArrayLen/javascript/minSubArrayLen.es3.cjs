/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var i;
  var start = 0;
  var end = 0;
  var acc = nums[0];
  var length = 0;
  for (i = 0; i < nums.length; i += 1, acc += nums[i]) {
    if (acc < target) {
      end += 1;
    } else {
      if (acc >= target) {
        length = length > 0 ? Math.min(end - start + 1, length) : end - start + 1;
      }
      i = start;
      start += 1;
      end = start;
      acc = 0;
    }
  }
  return length;
};
// @lc code=end

module.exports = minSubArrayLen;

/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var i;
  var max = 0;
  var count = 0;
  for (i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > max) max = count;
  }
  return max;
};
// @lc code=end

module.exports = findMaxConsecutiveOnes;

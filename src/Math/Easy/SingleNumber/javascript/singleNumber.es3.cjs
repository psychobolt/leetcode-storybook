/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var i;
  var result = 0;
  for (i = 0; i < nums.length; i += 1) {
    result ^= nums[i];
  }
  return result;
};
// @lc code=end

module.exports = singleNumber;

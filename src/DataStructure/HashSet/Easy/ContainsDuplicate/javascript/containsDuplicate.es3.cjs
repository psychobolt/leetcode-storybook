/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var i;
  var set = {};
  for (i = 0; i < nums.length; i += 1) {
    if (set[nums[i]]) return true;
    set[nums[i]] = true;
  }
  return false;
};
// @lc code=end

module.exports = containsDuplicate;

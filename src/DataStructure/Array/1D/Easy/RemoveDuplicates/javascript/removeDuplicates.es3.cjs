/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i;
  var k = 1;
  if (nums.length === 1) return k;
  for (i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] !== nums[i]) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  nums.length = k;
  return k;
};
// @lc code=end

module.exports = removeDuplicates;

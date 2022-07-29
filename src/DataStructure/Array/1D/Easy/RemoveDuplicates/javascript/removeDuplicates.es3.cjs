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
  var k = 0;
  if (nums.length === 1) return k;
  for (i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) {
      k += 1;
    }
  }
  return nums.length - k;
};
// @lc code=end

module.exports = removeDuplicates;

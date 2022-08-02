/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  var i;
  var j = nums.length - 1;
  var temp;
  for (i = j; i >= 0; i -= 1) {
    if (nums[i] % 2 !== 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j -= 1;
    }
  }
  return nums;
};
// @lc code=end

module.exports = sortArrayByParity;

/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  var i;
  var num;
  var digits = 0;
  var count = 0;
  for (i = 0; i < nums.length; i += 1) {
    num = nums[i];
    while (num > 0) {
      num = Math.floor(num / 10);
      digits += 1;
    }
    if (digits % 2 === 0) count += 1;
    digits = 0;
  }
  return count;
};
// @lc code=end

module.exports = findNumbers;

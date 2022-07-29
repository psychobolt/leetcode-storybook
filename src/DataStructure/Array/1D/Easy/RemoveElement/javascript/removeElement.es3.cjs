/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i;
  var k = nums.length;
  var temp;
  for (i = k - 1; i >= 0; i -= 1) {
    if (nums[i] === val) {
      k -= 1;
      temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
    }
  }
  nums.length = k;
  return k;
};
// @lc code=end

module.exports = removeElement;

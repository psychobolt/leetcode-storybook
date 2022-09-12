/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var MIN = -2147483649;

var thirdMax = function (nums) {
  var max1 = nums[0];
  var max2 = MIN;
  var max3 = MIN;
  var i;
  for (i = 1; i < nums.length; i += 1) {
    if (max1 < nums[i]) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (max2 < nums[i] && nums[i] < max1) {
      max3 = max2;
      max2 = nums[i];
    } else if (max3 < nums[i] && nums[i] < max2) {
      max3 = nums[i];
    }
  }
  return max3 === MIN ? max1 : max3;
};
// @lc code=end

module.exports = thirdMax;

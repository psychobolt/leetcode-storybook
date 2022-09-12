/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var result = [];
  var temp;
  var i;
  var j;
  for (i = 0, j = nums[0] - 1; i < nums.length; j = nums[i] - 1) {
    if (nums[j] !== nums[i]) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i += 1;
    }
  }
  for (i = 1; i <= nums.length; i += 1) {
    if (nums[i - 1] !== i) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end

module.exports = findDisappearedNumbers;

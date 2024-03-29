/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var maxSum = 0;
  var i;
  var positions = [0];
  var min = 0;
  for (i = 0; i < nums.length; i += 1) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  for (i = 0; i < nums.length; i += 1) {
    positions[nums[i] - min + 1] = (positions[nums[i] - min + 1] || 0) + 1;
  }
  positions.pop();
  for (i = 1; i < positions.length; i += 1) {
    positions[i] = (positions[i] || 0) + positions[i - 1];
  }
  for (i = 0; i < nums.length; i += 1) {
    if (positions[nums[i] - min] % 2 === 0) {
      maxSum += nums[i];
    }
    positions[nums[i] - min] += 1;
  }
  return maxSum;
};
// @lc code=end

module.exports = arrayPairSum;

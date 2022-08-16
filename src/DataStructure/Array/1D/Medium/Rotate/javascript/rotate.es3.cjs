/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var reverse = function (arr, start, end) {
    var temp;
    while (start < end) {
      temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start += 1;
      end -= 1;
    }
  };
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};
// @lc code=end

module.exports = rotate;

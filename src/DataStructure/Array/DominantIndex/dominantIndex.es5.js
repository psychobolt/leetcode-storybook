/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  var i, largestNum = -1, largestIndex = -1;
  for (i = 0; i < nums.length; i++) {
    var num = nums[i]
    if (largestNum < num) {
      largestNum = num;
      largestIndex = i;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (i === largestIndex) continue;
    if (2 * nums[i] > largestNum) return -1;
  }
  return largestIndex;
};

// @lc code=end

module.exports = dominantIndex;
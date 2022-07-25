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
function dominantIndex(nums) {
  var i;
  var largestNum = -1;
  var largestIndex = -1;
  var num;
  for (i = 0; i < nums.length; i += 1) {
    num = nums[i];
    if (largestNum < num) {
      largestNum = num;
      largestIndex = i;
    }
  }
  for (i = 0; i < nums.length; i += 1) {
    if (i !== largestIndex && 2 * nums[i] > largestNum) return -1;
  }
  return largestIndex;
}

// @lc code=end

module.exports = dominantIndex;

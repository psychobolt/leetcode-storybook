/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var low = 1;
  var high = nums.length;
  var mid;
  var i;
  var count;
  while (low < high) {
    mid = low + Math.trunc((high - low) / 2);
    count = 0;
    for (i = 0; i < nums.length; i += 1) {
      if (nums[i] <= mid) {
        count += 1;
      }
    }
    if (count <= mid) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
// @lc code=end

module.exports = findDuplicate;

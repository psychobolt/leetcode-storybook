/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  var count = 0;
  var sorted = [];
  var i;
  var left = 0;
  var right = heights.length - 1;
  var temp;
  for (i = 0; i < heights.length; i += 1) {
    sorted.push(heights[i]);
  }
  for (i = 0; i < sorted.length; i += 1) {
    if (sorted[left] >= sorted[right]) {
      temp = sorted[right];
      sorted[right] = sorted[left];
      sorted[left] = temp;
      right -= 1;
    } else {
      left += 1;
    }
  }
  for (i = 0; i < heights.length; i += 1) {
    if (heights[i] !== sorted[i]) {
      count += 1;
    }
  }
  return count;
};
// @lc code=end

module.exports = heightChecker;

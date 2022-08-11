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
  var i;
  var positions = [0];
  var sorted = [];
  for (i = 0; i < heights.length; i += 1) {
    positions[heights[i]] = (positions[heights[i]] || 0) + 1;
  }
  positions.pop();
  for (i = 1; i < positions.length; i += 1) {
    if (!positions[i]) {
      positions[i] = 0;
    }
    positions[i] += positions[i - 1];
  }
  for (i = 0; i < heights.length; i += 1) {
    sorted[positions[heights[i] - 1]] = heights[i];
    if (heights[positions[heights[i] - 1]] !== heights[i]) {
      count += 1;
    }
    positions[heights[i] - 1] += 1;
  }
  return count;
};
// @lc code=end

module.exports = heightChecker;

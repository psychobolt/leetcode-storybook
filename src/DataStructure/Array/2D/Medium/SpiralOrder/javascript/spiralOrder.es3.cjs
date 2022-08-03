/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var result = [];
  var i = 0;
  var j = 0;
  var a;
  var b;
  var m = matrix.length;
  var n = matrix[i].length;
  while (result.length < m * n) {
    result.push(matrix[i][j]);
    if (m === 1) {
      a = 0;
      b = 1;
    } else if (n === 1) {
      a = 1;
      b = 0;
    } else if (i < m - i && j < n - j) {
      a = 0;
      b = 1;
    } else if (i < m - 1 && j === n - 1) {
      a = 1;
      b = 0;
    } else if (i === m - 1 && j > 0) {
      a = 0;
      b = -1;
    } else if (i < m && j === 0) {
      a = -1;
      b = 0;
    }
    i += a;
    j += b;
  }
  return result;
};
// @lc code=end

module.exports = spiralOrder;

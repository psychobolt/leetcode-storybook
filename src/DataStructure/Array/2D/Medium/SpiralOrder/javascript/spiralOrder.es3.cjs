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
  var m = matrix.length;
  var n = matrix[0].length;
  var i = 0;
  var j = 0;
  var x0 = 0;
  var x1 = n - 1;
  var y0 = 0;
  var y1 = m - 1;
  var length = m * n;
  while (result.length < length) {
    result.push(matrix[i][j]);
    if (i === y0 && j < x1) {
      j += 1; // reach x1
      if (j === x1) {
        x1 -= 1;
      }
    } else if (n === 1 || (i < y1 && j === x1 + 1)) {
      i += 1; // reach y1
      if (i === y1) {
        y1 -= 1;
      }
    } else if (i === y1 + 1 && x0 < j) {
      j -= 1; // reach x0
      if (j === x0) {
        x0 += 1;
        y0 += 1;
      }
    } else if (y0 < i && j === x0 - 1) {
      i -= 1; // reach y0
    }
  }
  return result;
};
// @lc code=end

module.exports = spiralOrder;

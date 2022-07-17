/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat) {
  var m = mat.length;
  var n = mat[0].length;
  var result = [];
  var i = 0;
  var j = 0;
  var k;
  var a = -1;
  var b = 1;
  if (m === 1) {
    for (i = 0; i < n; i += 1) {
      result.push(mat[0][i]);
    }
    return result;
  }
  if (n === 1) {
    for (i = 0; i < m; i += 1) {
      result.push(mat[i][0]);
    }
    return result;
  }
  result.push(mat[i][j]);
  for (k = 1; k < m * n; k += 1) {
    i += a;
    j += b;
    if (i === m) {
      a *= -1;
      b *= -1;
      i -= 1;
      j += 2;
    } else if (j === n) {
      a *= -1;
      b *= -1;
      i += 2;
      j -= 1;
    } else if (i < 0) {
      a *= -1;
      b *= -1;
      i += 1;
    } else if (j < 0) {
      a *= -1;
      b *= -1;
      j += 1;
    }
    result.push(mat[i][j]);
  }
  return result;
}
// @lc code=end

module.exports = findDiagonalOrder;

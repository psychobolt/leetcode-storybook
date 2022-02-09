/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

/*
 solving mat = [[1,2,3],[4,5,6],[7,8,9]]
k   i, j    o = out of bounds  notes
0   0, 0 |      , 
   -1, 1 | i-- o, j++
    0, 1 | i++  , 
1   1, 0 | i++  , j--
2   2,-1 | i++  , j-- o
    2, 0 |      , j++
3   1, 1 | i--  , j++
4   0, 2 | i--  , j++
5   0, 3 | x    , j++ o         actual=-1,3
6   1, 2 | i++  , j--
7   2, 1 | i++  , j--
8   3, 1 | i++ o,               actual=3,0
9   2, 2 | i--  , j++           actual=4,0
*/

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  var m = mat.length,
      n = mat[0].length,
      result = [],
      i = 1,
      j = -1,
      a = -1,
      b = 1;
  if (m === 1) {
    for (i = 0; i < n; i++) {
      result.push(mat[0][i]);
    }
    return result;
  }
  if (n === 1) {
    for (i = 0; i < m; i++) {
      result.push(mat[i][0]);
    }
    return result;
  }
  for (var k = 0; k < m * n - 1; k++) {
    i += a;
    j += b;
    if (i < m && j === n) {
      i += 2;
      a *= -1;
      b *= -1;
      j += b;
    }
    if (i === m && j < n) {
      a *= -1;
      b *= -1;
      i += a;
      j += b;
      j += b;
    }
    if (j < 0) {
      a *= -1;
      b *= -1;
      j += b;
    }
    if (i < 0) {
      a *= -1;
      b *= -1;
      i += a;
    }
    if ((0 <= i && i < m) && (0 <= j && j < n)) {
      result.push(mat[i][j]);
    }
  }
  result.push(mat[m - 1][n - 1]);
  return result;
};
// @lc code=end

module.exports = findDiagonalOrder;

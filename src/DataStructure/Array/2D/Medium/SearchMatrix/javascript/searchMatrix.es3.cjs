/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var m = matrix.length;
  var n = matrix[m - 1].length;
  var left = 0;
  var right = m * n - 1;
  var mid;
  var i;
  var j;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    i = Math.floor(mid / n);
    j = mid % n;

    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
// @lc code=end

module.exports = searchMatrix;

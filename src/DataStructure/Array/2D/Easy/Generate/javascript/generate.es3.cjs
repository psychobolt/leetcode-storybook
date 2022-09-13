/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [[1]];
  var row;
  var last;
  var i;
  var j;
  for (i = 1; i < numRows; i += 1) {
    if (i === 1) {
      last = [1, 1];
    } else {
      row = result[result.length - 1];
      last = [1];
      for (j = 1; j < row.length; j += 1) {
        last.push(row[j - 1] + row[j]);
      }
      last.push(1);
    }
    result.push(last);
  }
  return result;
};
// @lc code=end

module.exports = generate;

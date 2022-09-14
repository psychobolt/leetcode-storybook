/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var row;
  var i;
  var j;
  for (row = [1], i = 0; i < rowIndex; i += 1) {
    for (j = i; j >= 1; j -= 1) {
      row[j] += row[j - 1];
    }
    row.push(1);
  }
  return row;
};
// @lc code=end

module.exports = getRow;

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
  var i;
  var j;
  var row;
  if (rowIndex === 0) {
    row = [1];
  } else {
    for (i = rowIndex - 1, row = getRow(i), j = i; j >= 1; j -= 1) {
      row[j] += row[j - 1];
    }
    row.push(1);
  }
  return row;
};
// @lc code=end

module.exports = getRow;

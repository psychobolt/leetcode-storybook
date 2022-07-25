/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  var i;
  var pos;
  var length = arr.length;
  for (i = 0; i < length; i += 1) {
    if (arr[i] === 0) {
      arr.push(0);
    }
  }
  for (i = length - 1; i >= 0; i -= 1) {
    pos = i + (arr.length - length);
    arr[pos] = arr[i];
    if (arr[i] === 0) {
      arr[pos - 1] = 0;
      arr.pop();
    }
  }
  return arr;
};
// @lc code=end

module.exports = duplicateZeros;

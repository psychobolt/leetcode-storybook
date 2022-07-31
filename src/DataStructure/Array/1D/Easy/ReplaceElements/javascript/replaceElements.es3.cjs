/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  var i;
  var largest = arr[arr.length - 1];
  var current;
  arr[arr.length - 1] = -1;
  for (i = arr.length - 2; i >= 0; i -= 1) {
    current = arr[i];
    arr[i] = largest;
    if (current > largest) {
      largest = current;
    }
  }
  return arr;
};
// @lc code=end

module.exports = replaceElements;

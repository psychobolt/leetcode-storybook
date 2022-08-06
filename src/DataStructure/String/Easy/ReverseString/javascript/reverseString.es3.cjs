/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var i = 0;
  var j = s.length - 1;
  var temp;
  while (i < j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i += 1;
    j -= 1;
  }
  return s;
};
// @lc code=end

module.exports = reverseString;

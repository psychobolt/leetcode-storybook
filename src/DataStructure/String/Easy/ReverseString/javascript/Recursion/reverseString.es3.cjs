/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
var helper = function (start, end, s) {
  var temp;
  if (start === end || start > end) {
    return s;
  }
  s = helper(start + 1, end - 1, s);
  temp = s[start];
  s[start] = s[end];
  s[end] = temp;
  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return helper(0, s.length - 1, s);
};
// @lc code=end

module.exports = reverseString;

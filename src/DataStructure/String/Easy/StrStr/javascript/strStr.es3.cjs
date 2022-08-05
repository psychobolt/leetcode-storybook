/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var i;
  var j = 0;
  var occur = null;
  if (needle === '') return 0;
  for (i = 0; i <= haystack.length; i += 1) {
    if (haystack.length - i < needle.length - j) {
      break;
    }
    if (j === needle.length) {
      return i - j;
    }
    if (occur === null && haystack.charAt(i) === needle.charAt(0)) {
      occur = i;
    }
    if (haystack.charAt(i) === needle.charAt(j)) {
      j += 1;
    } else if (occur != null) {
      i = occur;
      j = 1;
      occur = null;
    } else {
      j = 0;
    }
  }
  return -1;
};
// @lc code=end

module.exports = strStr;

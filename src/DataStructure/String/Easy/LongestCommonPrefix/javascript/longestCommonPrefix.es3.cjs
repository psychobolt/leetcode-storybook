/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var i;
  var j = 0;
  var prefix = [];
  var shortest = strs[0];
  var shortestIdx = 0;

  if (strs.length === 1) return shortest;

  for (i = 1; i < strs.length; i += 1) {
    if (shortest.length > strs[i].length) {
      shortest = strs[i];
      shortestIdx = i;
    }
  }

  if (shortest) {
    prefix.push(shortest.substring(0, 1));

    if (!prefix.length) return '';

    while (j < shortest.length) {
      for (i = 0; i < strs.length && j < shortest.length; i += 1) {
        if (i !== shortestIdx) {
          if (strs[i].charAt(j) !== prefix[j]) {
            prefix.pop();
            return prefix.join('');
          }
        }
      }
      j += 1;
      prefix.push(shortest.charAt(j));
    }
  }

  prefix.pop();
  return prefix.join('');
};
// @lc code=end

module.exports = longestCommonPrefix;

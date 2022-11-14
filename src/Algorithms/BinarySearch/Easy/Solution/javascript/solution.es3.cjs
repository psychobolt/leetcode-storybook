/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function firstBadVersion(n) {
    var left = 0;
    var right = n;
    var mid;
    var result = n;
    while (left < right) {
      mid = left + Math.trunc((right - left) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (isBadVersion(left)) return left;
    return result;
  };
};
// @lc code=end

module.exports = solution;

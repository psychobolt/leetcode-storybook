/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  var left = 0;
  var right = letters.length - 1;
  var mid;
  var targetCode = target.charCodeAt(0);
  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (letters[mid] === target && letters[mid + 1].charCodeAt(0) > targetCode) {
      return letters[mid + 1];
    }
    if (letters[mid].charCodeAt(0) > targetCode) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return letters[letters[left].charCodeAt(0) <= targetCode ? 0 : left];
};
// @lc code=end

module.exports = nextGreatestLetter;

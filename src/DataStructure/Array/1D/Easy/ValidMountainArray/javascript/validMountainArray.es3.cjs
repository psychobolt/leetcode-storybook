/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  var i;
  var isPeak = false;
  if (arr.length < 3) return false;
  if (arr[0] > arr[1]) return false;
  for (i = 1; i < arr.length - 1; i += 1) {
    if ((isPeak && arr[i] < arr[i + 1])
      || (arr[i - 1] === arr[i] || arr[i] === arr[i + 1])) {
      return false;
    }
    if (!isPeak && arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      isPeak = true;
    }
  }
  return isPeak;
};
// @lc code=end

module.exports = validMountainArray;

/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var i;
  var j;
  var sum;
  for (
    i = 0, j = numbers.length - 1, sum = numbers[i] + numbers[j];
    sum !== target;
    sum = numbers[i] + numbers[j]
  ) {
    if (sum < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return [i + 1, j + 1];
};
// @lc code=end

module.exports = twoSum;

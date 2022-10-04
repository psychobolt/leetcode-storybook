/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  var stack = [];
  var i;
  var j;
  var answer = [];

  for (i = 0; i < temperatures.length; i += 1) {
    answer[i] = 0;
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  return answer;
};
// @lc code=end

module.exports = dailyTemperatures;

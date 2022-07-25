/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var i;
  var result = [];
  var divisibleBy3;
  var divisibleBy5;
  for (i = 1; i <= n; i += 1) {
    divisibleBy3 = i % 3 === 0;
    divisibleBy5 = i % 5 === 0;
    if (divisibleBy3 && divisibleBy5) {
      result.push('FizzBuzz');
    } else if (divisibleBy3) {
      result.push('Fizz');
    } else if (divisibleBy5) {
      result.push('Buzz');
    } else {
      result.push(i + '');
    }
  }
  return result;
};
// @lc code=end

module.exports = fizzBuzz;

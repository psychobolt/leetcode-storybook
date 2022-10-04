/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var i;
  var token;
  var temp;
  var stack = [];
  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];
    if (token === '+') {
      temp = stack.pop() + stack.pop();
    } else if (token === '-') {
      temp = stack.pop();
      temp = stack.pop() - temp;
    } else if (token === '*') {
      temp = stack.pop() * stack.pop();
    } else if (token === '/') {
      temp = stack.pop();
      temp = stack.pop() / temp;
      temp = temp > 0 ? Math.floor(temp) : Math.ceil(temp);
    } else {
      temp = Number.parseInt(token, 10);
    }
    stack.push(temp);
  }
  return stack.pop();
};
// @lc code=end

module.exports = evalRPN;

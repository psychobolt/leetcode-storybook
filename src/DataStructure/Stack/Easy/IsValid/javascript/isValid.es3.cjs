/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var i;
  var c;
  var stack = [];

  function peek() {
    return stack.length ? stack[stack.length - 1] : null;
  }

  for (i = 0; i < s.length; i += 1) {
    c = s.charAt(i);
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else if (c === ')' && peek() === '(') {
      stack.pop();
    } else if (c === '}' && peek() === '{') {
      stack.pop();
    } else if (c === ']' && peek() === '[') {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end

module.exports = isValid;

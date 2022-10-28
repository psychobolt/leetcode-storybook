/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var stack = [];
  var i;
  var j;
  var k;
  var c;
  var temp;
  for (i = 0; i < s.length; i += 1) {
    c = s.charAt(i);
    if (c === ']') {
      temp = '';
      while (stack.length) {
        c = stack.pop();
        if (c === '[') break;
        temp = c + temp;
      }
      k = '';
      while (stack.length && !Number.isNaN(Number(stack[stack.length - 1]))) {
        k = stack.pop() + k;
      }
      for (j = 0; j < k; j += 1) {
        stack.push(temp);
      }
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
};
// @lc code=end

module.exports = decodeString;

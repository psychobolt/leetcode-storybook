/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var result = [];
  var i;
  var j = 0;
  var k = 0;
  var temp;

  function reverse(start, end) {
    while (start < end) {
      temp = result[start];
      result[start] = result[end];
      result[end] = temp;
      start += 1;
      end -= 1;
    }
  }

  for (i = 0; i < s.length; i += 1, k += 1) {
    if (s.charAt(i) === ' ' && result.length && result[k - 1] !== ' ') {
      reverse(j, k - 1);
      result[k] = ' ';
      j = k + 1;
    } else {
      result[k] = s.charAt(i);
    }
  }

  if (result[k - 1] === ' ') result.pop();

  reverse(j, k - 1);

  return result.join('');
};
// @lc code=end

module.exports = reverseWords;

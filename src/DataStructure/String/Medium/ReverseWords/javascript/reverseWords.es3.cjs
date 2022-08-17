/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
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

  for (i = s.length - 1; i >= 0; i -= 1) {
    if (s.charAt(i) === ' ') {
      if (result.length && result[k - 1] !== ' ') {
        reverse(j, k - 1);
        result[k] = ' ';
        k += 1;
        j = k;
      }
    } else {
      result[k] = s.charAt(i);
      k += 1;
    }
  }

  reverse(j, k - 1);

  if (result[k - 1] === ' ') result.pop();

  return result.join('');
};
// @lc code=end

module.exports = reverseWords;

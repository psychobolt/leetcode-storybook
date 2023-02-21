/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const freqT = new Map();

  // create frequency table
  for (let i = 0; i < t.length; i += 1) {
    const c = t.charAt(i);
    if (freqT.has(c)) {
      freqT.set(c, freqT.get(c) + 1);
    } else {
      freqT.set(c, 1);
    }
  }

  // sliding window
  const current = new Map();
  let seen = 0;
  let left;
  let right;
  let i = 0;
  let j = s.length;
  for (left = 0, right = 0; right < s.length; right += 1) {
    let c = s.charAt(right);

    // add current freq
    if (freqT.has(c)) {
      const freq = freqT.get(c);
      let count;
      if (current.has(c)) {
        count = current.get(c) + 1;
        current.set(c, count);
      } else {
        count = 1;
      }
      current.set(c, count);
      if (freq === count) { // only update seen if freq of T === current freq S
        seen += 1;
      }
    }

    // shift start by removing from S until seen !== have
    while (seen === freqT.size) {
      // update result if there is a smaller substring
      if (right - left + 1 <= j - i + 1) {
        i = left;
        j = right;
      }

      c = s.charAt(left);
      if (freqT.has(c)) {
        const count = current.get(c) - 1;
        current.set(c, count);
        if (freqT.get(c) > count) { // only update seen if freq of T > current freq S
          seen -= 1;
        }
      }
      left += 1;
    }
  }
  return j - i + 1 <= s.length ? s.substring(i, j + 1) : '';
};
// @lc code=end

export default minWindow;

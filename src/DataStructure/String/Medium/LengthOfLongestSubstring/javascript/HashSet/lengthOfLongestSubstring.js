/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let max = 0;
  for (
    let left = 0, right = 0; right < s.length; right += 1, max = Math.max(max, right - left + 1)
  ) {
    const c = s.charAt(right);
    while (set.has(c)) {
      set.delete(s.charAt(left));
      left += 1;
    }
    set.add(s.charAt(right));
  }
  return max;
};
// @lc code=end

export default lengthOfLongestSubstring;

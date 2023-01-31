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
  const set = new Map();
  let length = 0;
  for (let start = 0, i = 0; i < s.length; i += 1, length = Math.max(length, i - start)) {
    const c = s.charAt(i);
    const oldIndex = set.get(c);
    if (oldIndex >= start) start = oldIndex + 1;
    set.set(c, i);
  }
  return length;
};
// @lc code=end

export default lengthOfLongestSubstring;

/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = new Map();
  if (s.length === 1) return 0;
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charAt(i);
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  for (let i = 0; i < s.length; i += 1) {
    if (map.get(s.charAt(i)) === 1) return i;
  }
  return -1;
};
// @lc code=end

export default firstUniqChar;

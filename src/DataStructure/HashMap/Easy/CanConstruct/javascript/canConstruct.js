/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < ransomNote.length; i += 1) {
    const c = ransomNote.charAt(i);
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let i = 0; i < magazine.length; i += 1) {
    const c = magazine.charAt(i);
    let n = map.get(c);
    if (n) {
      n -= 1;
      if (n > 0) {
        map.set(c, n);
      } else {
        map.delete(c);
      }
    } else if (n === 0) {
      return false;
    }
  }
  return map.size === 0;
};
// @lc code=end

export default canConstruct;

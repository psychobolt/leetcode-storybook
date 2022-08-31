/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const mapA = new Map();
  const mapB = new Map();
  for (let i = 0; i < s.length; i += 1) {
    const a = s.charAt(i);
    const b = t.charAt(i);
    const c = mapA.get(a);
    const d = mapB.get(b);
    if (c === undefined && d === undefined) {
      mapA.set(a, b);
      mapB.set(b, a);
    } else if (c !== b) {
      return false;
    }
  }
  return true;
};
// @lc code=end

export default isIsomorphic;

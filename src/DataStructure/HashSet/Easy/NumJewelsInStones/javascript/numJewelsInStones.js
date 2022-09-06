/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
  const set = new Set();
  let count = 0;
  for (let i = 0; i < jewels.length; i += 1) {
    set.add(jewels.charAt(i));
  }
  for (let i = 0; i < stones.length; i += 1) {
    if (set.has(stones.charAt(i))) count += 1;
  }
  return count;
};
// @lc code=end

export default numJewelsInStones;

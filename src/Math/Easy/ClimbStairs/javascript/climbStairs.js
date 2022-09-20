/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

const map = new Map();

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (map.has(n)) return map.get(n);
  if (n < 2) return 1;
  let count = climbStairs(n - 1);
  count += climbStairs(n - 2);
  map.set(n, count);
  return count;
};
// @lc code=end

export default climbStairs;

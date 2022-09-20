/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start

const map = new Map();

/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (map.has(n)) return map.get(n);
  if (n < 2) return n;
  const result = fib(n - 1) + fib(n - 2);
  map.set(n, result);
  return result;
};
// @lc code=end

export default fib;

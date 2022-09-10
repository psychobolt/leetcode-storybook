/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const freq = new Map();
  const rank = new Map();
  nums.forEach(num => freq.set(num, (freq.get(num) || 0) + 1));
  for (const [num, value] of freq) { // eslint-disable-line no-restricted-syntax
    const list = rank.get(value);
    if (list) {
      list.push(num);
    } else {
      rank.set(value, [num]);
    }
  }
  const keys = Array.from(rank.keys()).sort((a, b) => b - a);
  const result = [];
  for (let i = 0; i < k; i += 1) {
    const list = rank.get(keys[i]);
    if (list) result.push(...list);
    if (result.length >= k) break;
  }
  return result;
};
// @lc code=end

export default topKFrequent;

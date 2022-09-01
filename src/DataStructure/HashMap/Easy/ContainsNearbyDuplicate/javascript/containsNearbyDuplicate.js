/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  return nums.find((num, i) => {
    const j = map.get(num);
    if (0 <= j && Math.abs(i - j) <= k) return true; // eslint-disable-line yoda
    map.set(num, i);
    return false;
  }) !== undefined;
};
// @lc code=end

export default containsNearbyDuplicate;

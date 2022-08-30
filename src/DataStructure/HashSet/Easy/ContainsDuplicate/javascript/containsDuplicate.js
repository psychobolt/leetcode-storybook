/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
// @lc code=end

export default containsDuplicate;

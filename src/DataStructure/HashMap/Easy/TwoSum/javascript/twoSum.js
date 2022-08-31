/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  nums.forEach((num, i) => map.set(num, i));
  for (let i = 0; i < nums.length; i += 1) {
    const index = map.get(target - nums[i]);
    if (i !== index && index >= 0) {
      return [i, index];
    }
  }
  return [];
};
// @lc code=end

export default twoSum;

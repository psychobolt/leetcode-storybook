/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
  function helper(i, accu, memo) {
    const key = `${i}->${accu}`;
    if (memo.has(key)) return memo.get(key);
    if (i === nums.length) {
      return accu === target ? 1 : 0;
    }
    let count = helper(i + 1, accu + nums[i], memo);
    count += helper(i + 1, accu - nums[i], memo);
    memo.set(key, count);
    return count;
  }

  return nums.length ? helper(0, 0, new Map()) : 0;
};
// @lc code=end

export default findTargetSumWays;

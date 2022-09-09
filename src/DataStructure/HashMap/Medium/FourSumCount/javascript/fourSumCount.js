/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = function (nums1, nums2, nums3, nums4) {
  function sumCount(a, b) {
    const map = new Map();
    a.forEach(num1 => {
      b.forEach(num2 => {
        const sum = num1 + num2;
        map.set(sum, (map.get(sum) || 0) + 1);
      });
    });
    return map;
  }

  const sumCountA = sumCount(nums1, nums2);
  const sumCountB = sumCount(nums3, nums4);
  let total = 0;

  for (const [sumA, countA] of sumCountA) { // eslint-disable-line no-restricted-syntax
    const countB = sumCountB.get(-sumA);
    if (countB !== undefined) {
      total += Math.min(countA, countB);
    }
  }
  return total;
};
// @lc code=end

export default fourSumCount;

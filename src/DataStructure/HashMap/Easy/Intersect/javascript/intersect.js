/* eslint-disable no-param-reassign */

/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const result = [];
  const map = new Map();
  let temp;
  if (nums1.length < nums2.length) {
    temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  nums1.forEach(num => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  nums2.forEach(num => {
    const count = map.get(num);
    if (count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  });
  return result;
};
// @lc code=end

export default intersect;

/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const intersect = new Set();
  let target;
  let search;
  if (nums1.length > nums2.length) {
    target = new Set(nums1);
    search = nums2;
  } else {
    target = new Set(nums2);
    search = nums1;
  }
  search.forEach(num => {
    if (target.has(num)) intersect.add(num);
  });
  return Array.from(intersect);
};
// @lc code=end

export default intersection;

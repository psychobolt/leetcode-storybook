/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
const contains = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left] === target;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  let a;
  let b;
  const result = new Set();
  if (nums1.length < nums2.length) {
    a = nums1;
    b = nums2;
  } else {
    a = nums2;
    b = nums1;
  }
  b.sort((x, y) => x - y);
  a.forEach(num => {
    if (contains(b, num)) {
      result.add(num);
    }
  });
  return Array.from(result);
};
// @lc code=end

export default intersection;

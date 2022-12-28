/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
var contains = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
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

var cmp = (x, y) => x - y;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var temp;
  var result = [];
  var i;
  if (nums1.length < nums2.length) {
    temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  nums1.sort(cmp);
  nums2.sort(cmp);
  for (i = 0; i < nums1.length; i += 1) {
    if (contains(nums2, nums1[i]) && !contains(result, nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;
};
// @lc code=end

module.exports = intersection;

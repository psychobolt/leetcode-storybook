/* eslint-disable no-param-reassign */

/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
var contains = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left] === target ? left : -1;
};

var cmp = (x, y) => x - y;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var temp;
  var result = [];
  var keys = [];
  var count = [];
  var index;
  var i;
  var c;
  if (nums1.length < nums2.length) {
    temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  nums1.sort(cmp);
  nums2.sort(cmp);
  for (i = 0; i < nums1.length; i += 1) {
    if (contains(nums2, nums1[i]) > -1) {
      index = contains(keys, nums1[i]);
      if (index === -1) {
        keys.push(nums1[i]);
        count.push(1);
      } else {
        count[index] += 1;
      }
    }
  }
  for (i = 0; i < nums2.length; i += 1) {
    if (contains(nums1, nums2[i]) > -1) {
      index = contains(keys, nums2[i]);
      c = count[index];
      if (c > 0) {
        result.push(nums2[i]);
        count[index] -= 1;
      }
    }
  }
  return result;
};
// @lc code=end

module.exports = intersect;

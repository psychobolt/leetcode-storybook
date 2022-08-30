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
var intersection = function (nums1, nums2) {
  var i;
  var target;
  var search;
  var map = {};
  var intersect = {};
  var result = [];
  if (nums1.length > nums2.length) {
    target = nums1;
    search = nums2;
  } else {
    target = nums2;
    search = nums1;
  }
  for (i = 0; i < target.length; i += 1) {
    map[target[i]] = target[i];
  }
  for (i = 0; i < search.length; i += 1) {
    if (map[search[i]] !== undefined) intersect[search[i]] = search[i];
  }
  for (i in intersect) { // eslint-disable-line no-restricted-syntax, guard-for-in
    result.push(intersect[i]);
  }
  return result;
};
// @lc code=end

module.exports = intersection;

/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start

var merge = function (left, right) {
  var result = [];
  var i = 0;
  var j = 0;
  var step;
  var n = left.length + right.length;

  while (result.length < n) {
    if (i >= left.length) {
      step = 0;
    } else if (j >= right.length) {
      step = 1;
    } else if (i < left.length && j < right.length) {
      step = left[i] < right[j] ? 1 : 0;
    }

    switch (step) {
      case 0:
        result.push(right[j]);
        j += 1;
        break;
      default:
        result.push(left[i]);
        i += 1;
        break;
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  var mid;
  var left;
  var right;

  if (nums.length < 2) {
    return nums;
  }

  mid = Math.floor((nums.length - 1) / 2);
  left = sortArray(nums.slice(0, mid + 1));
  right = sortArray(nums.slice(mid + 1));

  return merge(left, right);
};
// @lc code=end

module.exports = sortArray;

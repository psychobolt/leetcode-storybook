/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  var i, largestNum = -1, largestIndex = -1;
  for (i = 0; i < nums.length; i++) {
    var num = nums[i]
    if (largestNum < num) {
      largestNum = num;
      largestIndex = i;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (i === largestIndex) continue;
    if (2 * nums[i] > largestNum) return -1;
  }
  return largestIndex;
};

module.exports = dominantIndex;
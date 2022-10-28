/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  var target = image[sr][sc];
  var helper = function (i, j) {
    if ((i < 0 || i >= image.length)
      || (j < 0 || j >= image[i].length)
      || (image[i][j] !== target || image[i][j] === color)) return;
    image[i][j] = color;
    helper(i - 1, j);
    helper(i + 1, j);
    helper(i, j - 1);
    helper(i, j + 1);
  };
  helper(sr, sc);
  return image;
};
// @lc code=end

module.exports = floodFill;

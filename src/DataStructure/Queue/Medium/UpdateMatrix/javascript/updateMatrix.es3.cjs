/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start

var Queue = require('@datastructures-js/queue').Queue;

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  var queue = new Queue();
  var result = [];
  var i;
  var j;
  var cur;
  var x;
  var y;
  var val;

  var dist = function (dx, dy) {
    x = cur[0] + dx;
    y = cur[1] + dy;
    if ((x < 0 || x === mat.length) || (y < 0 || y === mat[x].length)) return;
    val = result[cur[0]][cur[1]];
    if (result[x][y] === -1) {
      if (val === 0) result[x][y] = 1;
      else result[x][y] = val + 1; // no need to check if val === -1,
      // since previous steps are always visited (BFS)
      queue.enqueue([x, y]);
    }
  };

  for (i = 0; i < mat.length; i += 1) {
    result.push([]);
    for (j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] === 0) {
        result[i].push(0);
        queue.enqueue([i, j]);
      } else {
        result[i].push(-1);
      }
    }
  }

  while (!queue.isEmpty()) {
    cur = queue.dequeue();
    dist(-1, 0);
    dist(1, 0);
    dist(0, -1);
    dist(0, 1);
  }

  return result;
};
// @lc code=end

module.exports = updateMatrix;

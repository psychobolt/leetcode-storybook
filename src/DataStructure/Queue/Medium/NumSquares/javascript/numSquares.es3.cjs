/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

var Queue = require('@datastructures-js/queue').Queue;

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  var queue = new Queue();
  var size;
  var i;
  var j;
  var k;
  var B;
  var b;
  var step = 1;

  function partition(m) {
    if (m === 0 || m === 1) return;
    for (j = 1; j < m; j += 1) {
      k = m - j * j;
      if (k < 1) break;
      queue.enqueue(k);
    }
  }

  queue.enqueue(n);
  while (!queue.isEmpty()) {
    size = queue.size();
    for (i = 0; i < size; i += 1) {
      B = queue.front();
      b = Math.floor(Math.sqrt(B));
      if (b * b === B) {
        return step;
      }
      partition(B);
      queue.dequeue();
    }
    step += 1;
  }
  return step;
};
// @lc code=end

module.exports = numSquares;

/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start

import { Queue } from '@datastructures-js/queue';

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const queue = new Queue();
  const visited = new Set();
  let count = 0;

  function enqueue(i, j) {
    if (i < 0 || i === grid.length || j < 0 || j === grid[i].length || grid[i][j] === '0' || visited.has(`${i},${j}`)) return;
    queue.enqueue([i, j]);
    visited.add(`${i},${j}`);
  }

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
        enqueue(i, j);
        while (!queue.isEmpty()) {
          for (let k = 0, size = queue.size(); k < size; k += 1) {
            const [x, y] = queue.front();
            enqueue(x - 1, y);
            enqueue(x, y + 1);
            enqueue(x + 1, y);
            enqueue(x, y - 1);
            queue.dequeue();
          }
        }
        count += 1;
      }
    }
  }

  return count;
};
// @lc code=end

export default numIslands;

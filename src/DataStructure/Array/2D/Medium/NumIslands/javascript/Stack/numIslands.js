/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const visited = new Set();
  const stack = [];
  let count = 0;

  function push(i, j) {
    const key = `${i},${j}`;
    if (visited.has(key) || i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;
    visited.add(key);
    stack.push([i, j]);
  }

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const key = `${i},${j}`;
      if (grid[i][j] === '1' && !visited.has(key)) {
        visited.add(key);
        stack.push([i, j]);
        while (stack.length) {
          const [x, y] = stack.pop();
          push(x - 1, y);
          push(x + 1, y);
          push(x, y - 1);
          push(x, y + 1);
        }
        count += 1;
      }
    }
  }

  return count;
};
// @lc code=end

export default numIslands;

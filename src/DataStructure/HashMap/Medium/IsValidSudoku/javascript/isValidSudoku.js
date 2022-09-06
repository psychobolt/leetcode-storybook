/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = new Map();
  const columns = new Map();
  const blocks = new Map();

  return !board.find((floor, i) => {
    const row = new Set();
    rows.set(i, row);
    return floor.find((cell, j) => {
      if (cell === '.') return false;

      const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let block = blocks.get(k);
      let col = columns.get(j);

      if (block && block.has(cell)) return true;
      if (row.has(cell)) return true;
      if (col && col.has(cell)) return true;

      if (!block) {
        block = new Set();
        blocks.set(k, block);
      }

      if (!col) {
        col = new Set();
        columns.set(j, col);
      }

      block.add(cell);
      row.add(cell);
      col.add(cell);
      return false;
    });
  });
};
// @lc code=end

export default isValidSudoku;

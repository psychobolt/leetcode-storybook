/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
import { Queue } from '@datastructures-js/queue';

function minMax(n) {
  if (n > 9) return 0;
  if (n < 0) return 9;
  return n;
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function (deadends, target) {
  const queue = new Queue();
  const visited = new Set();
  const invalid = new Set(deadends);
  let step = 0;

  const toString = (a, b, c, d) => `${a}${b}${c}${d}`;

  function enqueue(x, y, w, z) {
    const a = minMax(x);
    const b = minMax(y);
    const c = minMax(w);
    const d = minMax(z);
    const combination = toString(a, b, c, d);
    if (invalid.has(combination) || visited.has(combination)) return;
    queue.enqueue([a, b, c, d]);
    visited.add(combination);
  }

  enqueue(0, 0, 0, 0);
  while (!queue.isEmpty()) {
    for (let i = 0, size = queue.size(); i < size; i += 1) {
      const [a, b, c, d] = queue.front();
      if (toString(a, b, c, d) === target) {
        return step;
      }
      enqueue(a - 1, b, c, d);
      enqueue(a + 1, b, c, d);
      enqueue(a, b - 1, c, d);
      enqueue(a, b + 1, c, d);
      enqueue(a, b, c - 1, d);
      enqueue(a, b, c + 1, d);
      enqueue(a, b, c, d - 1);
      enqueue(a, b, c, d + 1);
      queue.dequeue();
    }
    step += 1;
  }

  return -1;
};
// @lc code=end

export default openLock;

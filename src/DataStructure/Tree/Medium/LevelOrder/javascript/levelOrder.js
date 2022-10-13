/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start

import { Queue } from '@datastructures-js/queue';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (root === null) return [];
  const levels = [[root.val]];
  if (root.left === null && root.right === null) return levels;
  const queue = new Queue();
  const map = new Map();
  queue.enqueue(root);
  map.set(root, 0);
  while (queue.size()) {
    const cur = queue.front();
    let level = map.get(cur);
    level += 1;
    if (level === levels.length) levels.push([]);
    const values = levels[level];
    if (cur.left !== null) {
      values.push(cur.left.val);
      queue.enqueue(cur.left);
      map.set(cur.left, level);
    }
    if (cur.right !== null) {
      values.push(cur.right.val);
      queue.enqueue(cur.right);
      map.set(cur.right, level);
    }
    queue.dequeue();
  }
  if (levels[levels.length - 1].length === 0) levels.pop();
  return levels;
};
// @lc code=end

export default levelOrder;

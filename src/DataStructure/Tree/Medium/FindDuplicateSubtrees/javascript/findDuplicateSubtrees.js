/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
 */

// @lc code=start
const helper = function (cur, subtrees, duplicates) {
  if (cur === null) return 'null';
  const key = `${cur.val}(${helper(cur.left, subtrees, duplicates)}, ${helper(cur.right, subtrees, duplicates)})`;
  if (subtrees.has(key)) {
    duplicates.add(key);
  }
  subtrees.set(key, cur);
  return key;
};

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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const duplicates = new Set();
  const subtrees = new Map();
  helper(root, subtrees, duplicates);
  const result = [];
  for (const key of duplicates.keys()) { // eslint-disable-line no-restricted-syntax
    result.push(subtrees.get(key));
  }
  return result;
};
// @lc code=end

export default findDuplicateSubtrees;

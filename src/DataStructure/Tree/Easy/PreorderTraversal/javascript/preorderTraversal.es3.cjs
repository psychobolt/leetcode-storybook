/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */

// @lc code=start
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var stack;
  var cur;
  var result = [];
  if (root === null) return result;
  stack = [root];
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    if (cur.right !== null) stack.push(cur.right);
    if (cur.left !== null) stack.push(cur.left);
  }
  return result;
};
// @lc code=end

module.exports = preorderTraversal;

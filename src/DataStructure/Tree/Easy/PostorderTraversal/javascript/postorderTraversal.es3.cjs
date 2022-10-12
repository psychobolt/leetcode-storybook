/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
  var result = [];
  var stack;
  var cur;
  if (root === null) return result;
  stack = [root];
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    if (cur.left !== null) stack.push(cur.left);
    if (cur.right !== null) stack.push(cur.right);
  }
  return result.reverse();
};
// @lc code=end

module.exports = postorderTraversal;

/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var left;
  var right;
  if (root === null) return null;
  if (root.val === p.val || root.val === q.val) return root;
  left = lowestCommonAncestor(root.left, p, q);
  right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};
// @lc code=end

module.exports = lowestCommonAncestor;

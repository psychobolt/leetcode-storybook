/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start

var helper = function (left, right) {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return helper(left.left, right.right) && helper(left.right, right.left);
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return root === null || helper(root.left, root.right);
};
// @lc code=end

module.exports = isSymmetric;

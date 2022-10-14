/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

var helper = function (node, sum, targetSum) {
  var result = false;
  if (node === null) return result;
  sum += node.val;
  if (node.left === null && node.right === null) return sum === targetSum;
  if (node.left !== null) result ||= helper(node.left, sum, targetSum);
  if (node.right !== null) result ||= helper(node.right, sum, targetSum);
  return result;
};

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return helper(root, 0, targetSum);
};
// @lc code=end

module.exports = hasPathSum;

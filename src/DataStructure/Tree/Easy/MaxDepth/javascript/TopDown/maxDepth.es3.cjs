/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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

var helper = function (level, cur) {
  if (cur === null) return level;
  level += 1;
  return helper(Math.max(helper(level, cur.left), helper(level, cur.right)), null);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return helper(0, root);
};
// @lc code=end

module.exports = maxDepth;

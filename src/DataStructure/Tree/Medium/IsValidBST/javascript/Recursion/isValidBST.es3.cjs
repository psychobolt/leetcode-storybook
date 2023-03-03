/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start

var isLessThan;
var isMoreThan;

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
var isValidBST = function (root) {
  if (root === null) return true;
  return isLessThan(root.val, root.left) && isValidBST(root.left)
      && isMoreThan(root.val, root.right) && isValidBST(root.right);
};

isLessThan = function (val, root) {
  if (root === null) return true;
  return root.val < val && isLessThan(val, root.left) && isLessThan(val, root.right);
};

isMoreThan = function (val, root) {
  if (root === null) return true;
  return root.val > val && isMoreThan(val, root.left) && isMoreThan(val, root.right);
};

// @lc code=end

module.exports = isValidBST;

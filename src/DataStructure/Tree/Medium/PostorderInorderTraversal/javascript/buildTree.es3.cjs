/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */

// @lc code=start

// Definition for a binary tree node.
var TreeNode = function (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  var index = postorder.length - 1;
  var helper = function (start, end) {
    var root = null;
    var rootIndex;
    if (start > end) return root;
    root = new TreeNode(postorder[index]);
    index -= 1;
    if (start === end) return root;
    rootIndex = inorder.indexOf(root.val);
    root.right = helper(rootIndex + 1, end);
    root.left = helper(start, rootIndex - 1);
    return root;
  };
  return helper(0, inorder.length - 1);
};
// @lc code=end

module.exports = buildTree;

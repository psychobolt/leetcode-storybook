/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start

// Definition for a binary tree node.
var TreeNode = function (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  var index = 0;
  var helper = function (start, end) {
    var root = null;
    var rootIndex;
    if (start > end) return root;
    root = new TreeNode(preorder[index]);
    index += 1;
    if (start === end) return root;
    rootIndex = inorder.indexOf(root.val);
    root.left = helper(start, rootIndex - 1);
    root.right = helper(rootIndex + 1, end);
    return root;
  };
  return helper(0, inorder.length - 1);
};
// @lc code=end

module.exports = buildTree;

/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
var helper = function (left, right) {
  if (left === null || right === null) return;
  left.next = right;
  right.next = right.next || null;
  helper(left.left, left.right);
  helper(right.left, right.right);
  helper(left.right, right.left);
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;
  root.next = null;
  helper(root.left, root.right);
  return root;
};
// @lc code=end

module.exports = connect;

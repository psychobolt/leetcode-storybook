/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
var connect2 = function (left, right) {
  if (left === null || left.right === null) return;
  left.right.next = right.left;
  connect2(left.right, right.left);
};

var connect1 = function (root) {
  if (root === null) return;
  root.next = null;
  if (root.left === null && root.right === null) return;
  connect1(root.left);
  connect1(root.right);
  connect2(root.left, root.right);
  root.left.next = root.right;
  root.right.next = null;
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
  connect1(root);
  return root;
};
// @lc code=end

module.exports = connect;

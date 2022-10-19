/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
var connect2 = function (left, right) {
  if (left === null || right === null) {
    return;
  }
  if (left.right !== null) left.right.next = right.left || right.right;
  else if (left.left !== null) left.left.next = right.left || right.right;
  connect2(left.right, right.left);
};

var connect1 = function (root) {
  if (root === null) return;
  root.next = null;
  if (root.left === null && root.right === null) return;
  connect1(root.left);
  connect1(root.right);
  connect2(root.left, root.right);
  if (root.left !== null) root.left.next = root.right;
  if (root.right !== null) root.right.next = null;
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

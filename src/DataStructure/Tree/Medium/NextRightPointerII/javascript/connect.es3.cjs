/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start

var helper = function (root, cur, next) {
  if (cur === null) return;
  cur.next = next;
  helper(cur, cur.right, null);
  helper(cur, cur.left, cur.right);
  if (next === null && root !== null) {
    for (root = root.next; root !== null; root = root.next) {
      next = root.left || root.right;
      if (next !== null) {
        helper(root, cur, next);
        return;
      }
    }
  }
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
  helper(null, root, null);
  return root;
};
// @lc code=end

module.exports = connect;

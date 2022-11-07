/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
var helper = function (head) {
  var next;
  var temp;
  if (head === null || (head.child === null && head.next === null)) return head;
  next = head.next;
  if (head.child !== null) {
    head.next = head.child;
    head.child.prev = head;
    temp = helper(head.child);
    temp.next = next;
    if (next === null) next = temp;
    else next.prev = temp;
    head.child = null;
  }
  return helper(next);
};

/*
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  helper(head);
  return head;
};
// @lc code=end

module.exports = flatten;

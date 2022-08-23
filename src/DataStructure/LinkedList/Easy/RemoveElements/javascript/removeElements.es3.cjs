/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var prev;
  var ptr;
  for (prev = null, ptr = head; ptr !== null; ptr = ptr.next) {
    if (ptr.val === val) {
      if (prev === null) {
        head = ptr.next;
      } else {
        prev.next = ptr.next;
      }
    } else {
      prev = ptr;
    }
  }
  return head;
};
// @lc code=end

module.exports = removeElements;

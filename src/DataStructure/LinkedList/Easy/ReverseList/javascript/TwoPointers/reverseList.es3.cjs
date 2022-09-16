/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  var temp;
  var ptr;
  if (head === null) return null;
  for (ptr = head.next, head.next = null; ptr !== null; ptr = temp) {
    temp = ptr.next;
    ptr.next = head;
    head = ptr;
  }
  return head;
};
// @lc code=end

module.exports = reverseList;

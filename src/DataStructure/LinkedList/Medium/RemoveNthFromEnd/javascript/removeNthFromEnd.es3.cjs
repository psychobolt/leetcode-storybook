/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var ptr1;
  var ptr2;
  var index;
  for (
    index = 0, ptr1 = head, ptr2 = head;
    ptr2 !== null;
    ptr2 = ptr2.next, index += 1
  ) {
    if (index > n) {
      ptr1 = ptr1.next;
    }
  }
  if (index === n) {
    return head.next;
  }
  ptr1.next = ptr1.next ? ptr1.next.next : null;
  return head;
};
// @lc code=end

module.exports = removeNthFromEnd;

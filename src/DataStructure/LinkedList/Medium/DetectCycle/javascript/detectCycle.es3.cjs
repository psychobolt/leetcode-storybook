/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var ptr1;
  var ptr2;
  var prev;
  for (
    ptr1 = head, ptr2 = head;
    ptr1 !== null && ptr2 !== null;
    ptr1 = ptr1.next, ptr2 = ptr2 ? ptr2.next : null
  ) {
    ptr2 = ptr2.next;
    if (ptr1 === ptr2) {
      ptr1 = head;
      prev = ptr2;
      while (ptr1 !== ptr2) {
        ptr2 = ptr2.next;
        if (prev === ptr2) {
          ptr1 = ptr1.next;
        }
      }
      return ptr1;
    }
  }
  return null;
};
// @lc code=end

module.exports = detectCycle;

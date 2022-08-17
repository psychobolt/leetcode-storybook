/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  var ptr1;
  var ptr2;
  for (
    ptr1 = head, ptr2 = head;
    ptr1 != null && ptr2 != null;
    ptr1 = ptr1.next, ptr2 = ptr2 ? ptr2.next : null
  ) {
    ptr2 = ptr2.next;
    if (ptr1 === ptr2) {
      return true;
    }
  }
  return false;
};
// @lc code=end

module.exports = hasCycle;

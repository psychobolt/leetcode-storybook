/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var head;
  var tail;
  var ptr1;
  var ptr2;
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val < list2.val) {
    head = list1;
    ptr1 = list1.next;
    ptr2 = list2;
  } else {
    head = list2;
    ptr1 = list1;
    ptr2 = list2.next;
  }
  tail = head;
  while (ptr1 !== null && ptr2 !== null) {
    if (ptr1.val < ptr2.val) {
      tail.next = ptr1;
      ptr1 = ptr1.next;
    } else {
      tail.next = ptr2;
      ptr2 = ptr2.next;
    }
    tail = tail.next;
  }
  if (ptr1 !== null) {
    tail.next = ptr1;
  }
  if (ptr2 !== null) {
    tail.next = ptr2;
  }
  return head;
};
// @lc code=end

module.exports = mergeTwoLists;

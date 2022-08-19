/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var ptr1 = null;
  var ptr2 = null;
  var lengthA = 0;
  var lengthB = 0;
  var length = 0;
  var i;
  for (ptr1 = headA; ptr1 !== null; ptr1 = ptr1.next) {
    lengthA += 1;
  }
  for (ptr2 = headB; ptr2 !== null; ptr2 = ptr2.next) {
    lengthB += 1;
  }
  if (lengthA > lengthB) {
    ptr1 = headA;
    ptr2 = headB;
    length = lengthA - lengthB;
  } else {
    ptr1 = headB;
    ptr2 = headA;
    length = lengthB - lengthA;
  }
  for (i = 0; i < length; i += 1) {
    ptr1 = ptr1.next;
  }
  while (ptr1 !== null && ptr2 !== null && ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return ptr1;
};
// @lc code=end

module.exports = getIntersectionNode;

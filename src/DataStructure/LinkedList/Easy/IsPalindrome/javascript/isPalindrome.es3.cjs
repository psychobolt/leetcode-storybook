/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var ptr1;
  var ptr2;
  var prev;
  var temp;
  for (
    ptr1 = head, ptr2 = head;
    ptr2 !== null;
    ptr1 = ptr1.next, ptr2 = ptr2 === null ? null : ptr2.next
  ) {
    ptr2 = ptr2.next;
  }
  for (prev = null; ptr1 !== null; prev = ptr1, ptr1 = temp) {
    temp = ptr1.next;
    ptr1.next = prev;
  }
  for (
    ptr1 = prev, ptr2 = head;
    ptr1 !== null && ptr2 !== null;
    ptr1 = ptr1.next, ptr2 = ptr2.next
  ) {
    if (ptr1.val !== ptr2.val) {
      return false;
    }
  }
  return true;
};
// @lc code=end

module.exports = isPalindrome;

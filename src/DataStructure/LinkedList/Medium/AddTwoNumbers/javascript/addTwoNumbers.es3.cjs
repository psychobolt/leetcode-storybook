/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var ptr1 = l1;
  var ptr2 = l2;
  var tail = null;
  var temp;
  var carry = 0;
  while (ptr1 || ptr2) {
    if (!ptr1 && ptr2) {
      tail.next = ptr2;
      ptr1 = ptr2;
      ptr2 = null;
    }
    tail = ptr1;
    if (ptr1) {
      temp = ptr1.val + (ptr2 ? ptr2.val : 0) + carry;
      if (temp > 9) {
        ptr1.val = temp - 10;
        carry = 1;
      } else {
        ptr1.val = temp;
        carry = 0;
      }
      ptr1 = ptr1.next;
    }
    if (ptr2) {
      ptr2 = ptr2.next;
    }
  }
  if (carry === 1) {
    tail.next = { val: 1, next: null };
  }
  return l1;
};
// @lc code=end

module.exports = addTwoNumbers;

/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function (head) {
  var ptr;
  var odd;
  var even;
  var temp;
  var isOdd;
  if (head === null) return null;
  if (head.next === null) return head;
  odd = head;
  even = odd.next;
  if (even !== null && even.next === null) return head;
  temp = even;
  for (isOdd = true, ptr = even.next; ptr !== null; isOdd = !isOdd, ptr = ptr.next) {
    if (isOdd) {
      odd.next = ptr;
      odd = ptr;
    } else {
      even.next = ptr;
      even = ptr;
    }
  }
  odd.next = temp;
  even.next = null;
  return head;
};
// @lc code=end

module.exports = oddEvenList;

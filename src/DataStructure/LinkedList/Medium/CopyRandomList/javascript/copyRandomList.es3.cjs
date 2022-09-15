/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  var ptr1;
  var ptr2;
  var temp;
  // Definition for a Node.
  function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
  if (head === null) return null;
  for (ptr1 = head; ptr1 !== null; ptr1 = temp.next) {
    temp = new Node(ptr1.val, ptr1.next, null);
    ptr1.next = temp;
  }
  for (
    ptr1 = head, ptr2 = ptr1.next;
    ptr1 !== null;
    ptr1 = ptr2.next, ptr2 = ptr1 === null ? null : ptr1.next
  ) {
    ptr2.random = ptr1.random === null ? null : ptr1.random.next;
  }
  for (
    ptr1 = head, ptr2 = ptr1.next, head = ptr2;
    ptr1 !== null;
    ptr1 = ptr2.next, ptr2 = ptr1 === null ? null : ptr1.next, temp.next = ptr2
  ) {
    temp = ptr2;
    ptr1.next = ptr2.next;
  }
  return head;
};
// @lc code=end

module.exports = copyRandomList;

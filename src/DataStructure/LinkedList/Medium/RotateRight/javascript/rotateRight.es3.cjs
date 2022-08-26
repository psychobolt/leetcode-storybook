/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  var length;
  var ptr;
  var end1;
  var end2;
  var temp;
  var i;
  if (k === 0 || head === null) return head;
  for (length = 0, ptr = head; ptr !== null; ptr = ptr.next) {
    length += 1;
  }
  length -= k % length;
  for (
    i = 0, ptr = head, end1 = null, end2 = head;
    ptr !== null;
    i += 1, end1 = ptr, ptr = ptr.next
  ) {
    if (i === length) {
      temp = head;
      head = ptr;
    } else if (i < length) {
      end2 = ptr;
    }
  }
  end1.next = temp;
  end2.next = null;
  return head;
};
// @lc code=end

module.exports = rotateRight;

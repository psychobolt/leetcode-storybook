/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  var temp;
  var next = head;
  if (head === null || head.next === null) return head;
  head = head.next;
  temp = head.next;
  head.next = next;
  next.next = swapPairs(temp);
  return head;
};
// @lc code=end

module.exports = swapPairs;

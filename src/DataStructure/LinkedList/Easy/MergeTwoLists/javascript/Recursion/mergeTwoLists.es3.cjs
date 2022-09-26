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
var helper = function (tail, list1, list2) {
  var temp;
  if (list1 === null) {
    tail.next = list2;
    return list2;
  }
  if (list2 === null) {
    tail.next = list1;
    return list1;
  }
  if (list1.val <= list2.val) {
    temp = list1.next;
    tail.next = list1;
    return helper(tail.next, temp, list2);
  }
  temp = list2.next;
  tail.next = list2;
  return helper(tail.next, list1, temp);
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var head;
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  head = list1.val < list2.val ? list1 : list2;
  if (head === list1) list1 = list1.next;
  if (head === list2) list2 = list2.next;
  helper(head, list1, list2);
  return head;
};
// @lc code=end

module.exports = mergeTwoLists;

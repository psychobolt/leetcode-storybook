/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

var Node = function Node(val, prev, next) {
  this.val = val;
  this.prev = prev || null;
  this.next = next || null;
};

var MyLinkedList = function MyLinkedList() {
  this.head = null;
};

/**
 * @param {number} index
 * @return {Node}
 */
MyLinkedList.prototype.getNode = function getNode(index) {
  var i;
  var ptr;
  for (i = 0, ptr = this.head; ptr != null; ptr = ptr.next) {
    if (index === i) {
      return ptr;
    }
    i += 1;
  }
  return null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function get(index) {
  var node = this.getNode(index);
  if (node) return node.val;
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function addAtHead(val) {
  if (this.head === null) {
    this.head = new Node(val);
  } else {
    this.head.prev = new Node(val, null, this.head);
    this.head = this.head.prev;
  }
  return null;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function addAtTail(val) {
  var prev;
  var ptr;
  if (this.head === null) {
    this.addAtHead(val);
  } else {
    for (prev = this.head, ptr = prev.next; ptr != null; prev = ptr, ptr = ptr.next);
    prev.next = new Node(val, prev);
  }
  return null;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function addAtIndex(index, val) {
  var i;
  var prev;
  var ptr;
  var node;
  if (index === 0) return this.addAtHead(val);
  if (this.head === null) return null;
  for (i = 1, prev = this.head, ptr = prev.next; ptr != null; i += 1, prev = ptr, ptr = ptr.next) {
    if (index === i) break;
  }
  if (index <= (i + 1)) {
    node = new Node(val, prev, ptr);
    prev.next = node;
    node.next = ptr;
    if (ptr !== null) {
      ptr.prev = node;
    }
  }
  return null;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function deleteAtIndex(index) {
  var i;
  var ptr;
  var prev;
  var next;
  if (this.head === null) {
    return null;
  }
  if (index === 0) {
    this.head = this.head.next;
    return null;
  }
  for (i = 1, ptr = this.head.next; ptr != null; i += 1, ptr = ptr.next) {
    if (index === i) {
      prev = ptr.prev;
      next = ptr.next;
      prev.next = next;
      if (next !== null) {
        next.prev = prev;
      }
      break;
    }
  }
  return null;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

MyLinkedList.prototype.toArray = function toArray() {
  var result = [];
  var ptr;
  for (ptr = this.head; ptr !== null; ptr = ptr.next) {
    result.push(ptr.val);
  }
  return result;
};

module.exports = MyLinkedList;

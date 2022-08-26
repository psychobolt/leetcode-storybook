/*
 * @lc app=leetcode id=705 lang=javascript
 *
 * [705] Design HashSet
 */

// @lc code=start

var Node = function Node(val, next) {
  this.val = val;
  this.next = next || null;
};

var MyHashSet = function () {
  var i;
  this.data = [];
  this.size = 1000;
  for (i = 0; i < this.size; i += 1) {
    this.data.push(null);
  }
};

MyHashSet.prototype.getIndex = function getIndex(key) {
  return key % this.size;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function add(key) {
  var i = this.getIndex(key);
  var prev;
  var ptr;
  for (prev = null, ptr = this.data[i]; ptr !== null; prev = ptr, ptr = ptr.next) {
    if (ptr.val === key) return null;
  }
  if (prev === null) {
    this.data[i] = new Node(key);
  } else {
    prev.next = new Node(key);
  }
  return null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function remove(key) {
  var i = this.getIndex(key);
  var prev;
  var ptr;
  if (this.data[i] !== null) {
    for (prev = null, ptr = this.data[i]; ptr !== null; prev = ptr, ptr = ptr.next) {
      if (ptr.val === key) {
        if (prev === null) {
          this.data[i] = ptr.next;
        } else {
          prev.next = ptr.next;
        }
        return null;
      }
    }
  }
  return null;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function contains(key) {
  var i = this.getIndex(key);
  var ptr;
  for (ptr = this.data[i]; ptr !== null; ptr = ptr.next) {
    if (ptr.val === key) return true;
  }
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

module.exports = MyHashSet;

/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */

// @lc code=start

var Node = function (key, val, next) {
  this.key = key;
  this.val = val;
  this.next = next || null;
};

var MyHashMap = function () {
  var i;
  this.data = [];
  this.size = 1000;
  for (i = 0; i < this.size; i += 1) {
    this.data.push(null);
  }
};

MyHashMap.prototype.getIndex = function getIndex(key) {
  return key % this.size;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function put(key, value) {
  var i = this.getIndex(key);
  var prev;
  var ptr;
  for (prev = null, ptr = this.data[i]; ptr !== null; prev = ptr, ptr = ptr.next) {
    if (ptr.key === key) {
      ptr.val = value;
      return null;
    }
  }
  if (prev === null) {
    this.data[i] = new Node(key, value);
  } else {
    prev.next = new Node(key, value);
  }
  return null;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function get(key) {
  var i;
  var ptr;
  for (i = this.getIndex(key), ptr = this.data[i]; ptr !== null; ptr = ptr.next) {
    if (ptr.key === key) return ptr.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function remove(key) {
  var i;
  var ptr;
  var prev;
  for (
    i = this.getIndex(key), prev = null, ptr = this.data[i];
    ptr !== null;
    prev = ptr, ptr = ptr.next
  ) {
    if (ptr.key === key) {
      if (prev === null) {
        this.data[i] = ptr.next;
      } else {
        prev.next = ptr.next;
      }
      return null;
    }
  }
  return null;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

module.exports = MyHashMap;

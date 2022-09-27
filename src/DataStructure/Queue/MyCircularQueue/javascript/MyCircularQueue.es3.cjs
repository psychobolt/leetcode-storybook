/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.frontIndex = -1;
  this.rearIndex = -1;
  this.data = [];
  this.size = 0;
  this.maxSize = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function enQueue(value) {
  if (this.isFull()) return false;
  if (this.frontIndex === -1) this.frontIndex = 0;
  if (this.rearIndex === this.maxSize - 1) {
    this.rearIndex = 0;
  } else {
    this.rearIndex += 1;
  }
  this.data[this.rearIndex] = value;
  this.size += 1;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function deQueue() {
  if (this.isEmpty()) return false;
  if (this.frontIndex === this.maxSize - 1) {
    this.frontIndex = 0;
  } else {
    this.frontIndex += 1;
    if (this.rearIndex === -1) this.rearIndex = this.frontIndex;
  }
  this.size -= 1;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function Front() {
  if (this.isEmpty()) return -1;
  return this.data[this.frontIndex];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function Rear() {
  if (this.isEmpty()) return -1;
  return this.data[this.rearIndex];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function isEmpty() {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function isFull() {
  return this.size === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

module.exports = MyCircularQueue;

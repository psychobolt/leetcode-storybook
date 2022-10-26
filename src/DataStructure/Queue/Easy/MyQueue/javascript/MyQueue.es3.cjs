/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function MyQueue() {
  this.data = [];
  this.front = -1;
  this.back = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function push(x) {
  if (this.front < 0) this.front += 1;
  this.back += 1;
  this.data.push(x);
  return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function pop() {
  var val = this.data[this.front];
  if (this.front === this.back) {
    this.front = -1;
    this.back = -1;
    this.data = [];
  } else {
    this.front += 1;
  }
  return val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function peek() {
  return this.data[this.front];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function empty() {
  return this.front === -1;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

module.exports = MyQueue;

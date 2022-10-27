/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function MyStack() {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function push(x) {
  var i;
  this.queue.push(x);
  for (i = 0; i < this.queue.length - 1; i += 1) {
    x = this.queue.shift();
    this.queue.push(x);
  }
  return null;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function pop() {
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function top() {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function empty() {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

module.exports = MyStack;

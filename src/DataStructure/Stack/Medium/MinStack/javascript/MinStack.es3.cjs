/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var Node = function (val, min) {
  this.val = val;
  this.min = min || null;
};

var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function push(val) {
  var node = new Node(val);
  var top = this.data.length ? this.data[this.data.length - 1] : null;
  node.min = top && top.min.val < val ? top.min : node;
  this.data.push(node);
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function pop() {
  if (this.data.length) this.data.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function top() {
  if (this.data.length) return this.data[this.data.length - 1].val;
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function getMin() {
  var node = this.data.length ? this.data[this.data.length - 1] : null;
  if (node) return node.min.val;
  return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

module.exports = MinStack;

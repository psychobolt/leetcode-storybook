/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start

var RandomizedSet = function () {
  this.keys = {};
  this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function insert(val) {
  var key = this.getKey(val);
  if (this.keys[key] === undefined) {
    this.data.push(val);
    this.keys[key] = this.data.length - 1;
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function remove(val) {
  var key = this.getKey(val);
  var index;
  var value;
  if (this.keys[key] === undefined) return false;
  index = this.keys[key];
  delete this.keys[key];
  if (index < this.data.length - 1) {
    value = this.data[this.data.length - 1];
    key = this.getKey(value);
    this.data[index] = value;
    this.keys[key] = index;
  }
  this.data.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function getRandom() {
  return this.data[Math.floor(Math.random() * this.data.length)];
};

RandomizedSet.prototype.getKey = function getKey(val) {
  return 'val_' + val;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

module.exports = RandomizedSet;

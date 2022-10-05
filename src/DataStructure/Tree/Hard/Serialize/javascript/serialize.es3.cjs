/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start

var Queue = require('@datastructures-js/queue').Queue;

// Definition for a binary tree node.
var TreeNode = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  var queue;
  var cur;
  var data;
  var result;
  var i;
  var lastIndex;

  if (root === null) return '[]';

  data = [];
  queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    cur = queue.front();
    if (cur === null) {
      data.push(null);
    } else {
      data.push(cur.val);
      queue.enqueue(cur.left);
      queue.enqueue(cur.right);
    }
    queue.dequeue();
  }

  result = '[' + data[0];
  for (lastIndex = data.length - 1; data[lastIndex] === null && lastIndex > 0; lastIndex -= 1);
  for (i = 1; i <= lastIndex; i += 1) result += ',' + data[i];
  return result + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  var i;
  var root;
  var cur;
  var queue;

  data = JSON.parse(data);

  function enqueue() {
    var node = null;
    if (i >= data.length || data[i] === null) return null;
    node = new TreeNode(data[i]);
    queue.enqueue(node);
    return node;
  }

  if (data.length === 0) return null;

  queue = new Queue();
  root = new TreeNode(data[0]);
  queue.enqueue(root);

  for (i = 1; i < data.length && !queue.isEmpty(); i += 1) {
    cur = queue.front();
    cur.left = enqueue();
    i += 1;
    cur.right = enqueue();
    queue.dequeue();
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

module.exports = serialize;
module.exports.deserialize = deserialize;

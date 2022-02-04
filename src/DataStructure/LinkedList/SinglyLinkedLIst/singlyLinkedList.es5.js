var Node = function (val, next) {
  this.val = val;
  this.next = next || null;
};
  
var MyLinkedList = function() {
  this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  var i, ptr;
  for(i = 0, ptr = this.head; ptr != null; ptr = ptr.next) {
    if (index === i++) {
      return ptr.val;
    }
  }
  return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
  } else {
    this.head = new Node(val, this.head);
  }
  return null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.head === null) {
    this.addAtHead(val);
  } else {
    var prev, ptr;
    for(prev = this.head, ptr = prev.next; ptr != null; prev = ptr, ptr = ptr.next);
    prev.next = new Node(val);
  }
  return null;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) return this.addAtHead(val);
  if (this.head === null) return null;
  var i, prev, ptr, node = new Node(val);
  for(i = 1, prev = this.head, ptr = prev.next; ptr != null; i++, prev = ptr, ptr = ptr.next) {
    if (index === i) break;
  }
  if (index <= (i + 1)) {
    prev.next = node;
    node.next = ptr;
  }
  return null;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.head === null) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return null;
    }
    var i, prev, ptr;
    for(i = 1, prev = this.head, ptr = prev.next; ptr != null; i++, prev = ptr, ptr = ptr.next) {
      if (index === i) {
        prev.next = ptr.next;
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

module.exports = MyLinkedList;
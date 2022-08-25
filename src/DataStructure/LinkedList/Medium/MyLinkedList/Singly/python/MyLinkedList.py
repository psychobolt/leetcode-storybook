#
# @lc app=leetcode id=707 lang=python3
#
# [707] Design Linked List
#

# @lc code=start
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next


class MyLinkedList:

    def __init__(self):
        self.head = None

    def get(self, index: int) -> int:
        i = 0
        ptr = self.head
        while ptr is not None:
            if index == i:
                return ptr.val
            ptr = ptr.next
            i += 1
        return -1

    def addAtHead(self, val: int) -> None:
        if self.head is None:
            self.head = Node(val)
        else:
            self.head = Node(val, self.head)

    def addAtTail(self, val: int) -> None:
        if self.head is None:
            self.addAtHead(val)
        else:
            prev = self.head
            ptr = prev.next
            while ptr is not None:
                prev = ptr
                ptr = ptr.next
            prev.next = Node(val)

    def addAtIndex(self, index: int, val: int) -> None:
        if index == 0:
            return self.addAtHead(val)
        if self.head is None:
            return None
        i = 1
        prev = self.head
        ptr = prev.next
        while ptr is not None:
            if index == i:
                break
            i += 1
            prev = ptr
            ptr = ptr.next
        if index <= i + 1:
            node = Node(val)
            prev.next = node
            node.next = ptr

    def deleteAtIndex(self, index: int) -> None:
        if self.head is None:
            return None
        if index == 0:
            self.head = self.head.next
            return None
        i = 1
        prev = self.head
        ptr = prev.next
        while ptr is not None:
            if index == i:
                prev.next = ptr.next
                break
            i += 1
            prev = ptr
            ptr = ptr.next


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
# @lc code=en

import LinkedList from 'linked-list';

import json from '../testCases.json';

export class RandomLinkedList extends LinkedList {
  getIndex(node) {
    for (let i = 0, ptr = this.head; ptr !== null; i += 1, ptr = ptr.next) {
      if (ptr === node) {
        return i;
      }
    }
    return null;
  }

  toArray() {
    const result = [];
    for (let ptr = this.head; ptr !== null; ptr = ptr.next) {
      result.push([ptr.val, ptr.random === null ? null : this.getIndex(ptr.random)]);
    }
    return result;
  }
}

export const cases = json;

export default (runSolution, { input }) => {
  const list = new LinkedList();
  input.forEach(([val]) => {
    list.addAtTail(val);
  });
  for (let i = 0, ptr = list.head; ptr !== null; i += 1, ptr = ptr.next) {
    const random = input[i][1];
    ptr.random = random === null ? null : list.getNode(random);
  }
  return runSolution(list.head);
};

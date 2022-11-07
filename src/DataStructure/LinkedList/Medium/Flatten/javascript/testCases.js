import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => {
  const mainList = new LinkedList();
  let prev = null;
  let list = mainList;
  let index = 0;
  input.forEach(val => {
    if (list.head !== null && val === null) {
      prev = list.head;
      list = new LinkedList();
      index = 0;
    } else if (prev !== null && val === null) {
      prev = prev.next;
    } else {
      if (list.head === null && prev !== null) {
        list.addAtTail(val);
        prev.child = list.head;
      } else {
        list.addAtTail(val);
      }
      const cur = list.getNode(index);
      cur.prev = list.getNode(index - 1);
      cur.child = null;
      index += 1;
    }
  });
  return runSolution(mainList.head);
};

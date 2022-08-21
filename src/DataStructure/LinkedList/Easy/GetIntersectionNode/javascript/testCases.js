import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => {
  const listA = new LinkedList();
  const listB = new LinkedList();
  input.listA.forEach(val => listA.addAtTail(val));
  input.listB.forEach((val, i) => {
    if (input.intersectVal) {
      if (i < input.skipB) {
        listB.addAtTail(val);
      } else if (input.skipB === i) {
        listB.getNode(i - 1).next = listA.getNode(input.skipA);
      }
    } else {
      listB.addAtTail(val);
    }
  });
  return runSolution(listA.head, listB.head);
};

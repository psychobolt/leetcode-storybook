import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { head, pos } }) => {
  const list = new LinkedList();
  head.forEach(val => list.addAtTail(val));
  if (pos > -1) {
    list.getNode(head.length - 1).next = list.getNode(pos);
  }
  return runSolution(list.head);
};

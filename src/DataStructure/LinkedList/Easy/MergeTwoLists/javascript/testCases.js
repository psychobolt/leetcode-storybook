import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  input.list1.forEach(val => list1.addAtTail(val));
  input.list2.forEach(val => list2.addAtTail(val));
  return runSolution(list1.head, list2.head);
};

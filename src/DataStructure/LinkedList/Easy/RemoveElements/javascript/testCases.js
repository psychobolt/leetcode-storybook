import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => {
  const list = new LinkedList();
  input.head.forEach(val => list.addAtTail(val));
  return runSolution(list.head, input.val);
};

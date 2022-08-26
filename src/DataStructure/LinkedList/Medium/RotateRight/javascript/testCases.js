import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { head, k } }) => {
  const list = new LinkedList();
  head.forEach(val => list.addAtTail(val));
  return runSolution(list.head, k);
};

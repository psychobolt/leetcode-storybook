import LinkedList from 'linked-list';

import json from '../testCases.json';

export const cases = json;

export function toArray(head) {
  const result = [];
  for (let ptr = head; ptr !== null; ptr = ptr.next) {
    result.push(ptr.val);
  }
  return result;
}

export default (runSolution, { input: { head, n } }) => {
  const list = new LinkedList();
  head.forEach(val => list.addAtTail(val));
  return runSolution(list.head, n);
};

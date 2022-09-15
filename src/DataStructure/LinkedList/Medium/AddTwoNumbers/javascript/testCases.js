import LinkedList from 'linked-list';
import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => {
  const l1 = new LinkedList();
  const l2 = new LinkedList();
  input.l1.forEach(val => l1.addAtTail(val));
  input.l2.forEach(val => l2.addAtTail(val));
  return runSolution(l1.head, l2.head);
};

import json from '../testCases.json';
import MyLinkedList from '../../../Medium/MyLinkedList/javascript/MyLinkedList.es3.cjs';

export const cases = json;

export default (runSolution, { input: { head, pos } }) => {
  const list = new MyLinkedList();
  head.forEach(val => list.addAtTail(val));
  if (pos > -1) {
    list.getNode(head.length - 1).next = list.getNode(pos);
  }
  return runSolution(list.head);
};

import solution from './copyRandomList.es3.cjs';
import runTestCase, { RandomLinkedList, cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Medium/[138] Copy List with Random Pointer] - Case %#',
  (name, testCase) => {
    const list = new RandomLinkedList();
    list.head = runTestCase(solution, testCase);
    expect(list.toArray()).toEqual(testCase.expected);
  },
);

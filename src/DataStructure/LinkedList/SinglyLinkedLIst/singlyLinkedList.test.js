import runTestCase, { cases } from './testCases.js';

import SinglyLinkedList from './singlyLinkedList.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  '[Linked List/Singly Linked List] - Case %#',
  (name, testCase) => expect(runTestCase(SinglyLinkedList, testCase)).toEqual(testCase.expected),
);

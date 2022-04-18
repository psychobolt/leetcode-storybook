import runTestCase, { cases } from './testCases.js';

import SinglyLinkedList from './singlyLinkedList.es3.cjs';

test('[Linked List/Singly Linked List] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(SinglyLinkedList, testCase)).toEqual(testCase.expected);
  });
});

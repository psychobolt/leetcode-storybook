import runTestCase, { cases } from './testCases';

import SinglyLinkedList_es5 from './singlyLinkedList.es5';

test('SinglyLinkedList (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(SinglyLinkedList_es5, testCase)).toEqual(testCase.expected);
  });
});
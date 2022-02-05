import runTestCase, { cases } from './testCases';

import SinglyLinkedList from './singlyLinkedList.es5';

test('SinglyLinkedList (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(SinglyLinkedList, testCase)).toEqual(testCase.expected);
  });
});
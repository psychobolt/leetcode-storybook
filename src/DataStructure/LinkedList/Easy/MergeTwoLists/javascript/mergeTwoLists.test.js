import LinkedList from 'linked-list';

import solution from './mergeTwoLists.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Easy/[21] Merge Two Sorted Lists] - Case %#',
  (name, testCase) => expect(
    LinkedList.prototype.toArray.call({ head: runTestCase(solution, testCase) }),
  ).toEqual(testCase.expected),
);

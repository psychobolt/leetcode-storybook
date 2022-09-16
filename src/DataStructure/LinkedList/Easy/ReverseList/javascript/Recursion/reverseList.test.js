import LinkedList from 'linked-list';

import solution from './reverseList.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Easy/[206] Reverse Linked List/Recursion] - Case %#',
  (name, testCase) => {
    expect(
      LinkedList.prototype.toArray.call({ head: runTestCase(solution, testCase) }),
    ).toEqual(testCase.expected);
  },
);

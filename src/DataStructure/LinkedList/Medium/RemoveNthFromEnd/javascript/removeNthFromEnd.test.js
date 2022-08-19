import solution from './removeNthFromEnd.es3.cjs';
import runTestCase, { cases, toArray } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Medium/[19] Remove Nth Node From End of List] - Case %#',
  (name, testCase) => expect(toArray(runTestCase(solution, testCase))).toEqual(testCase.expected)
);

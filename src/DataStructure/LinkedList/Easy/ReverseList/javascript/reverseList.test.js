import solution from './reverseList.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.skip.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Easy/[206] Reverse Linked List] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

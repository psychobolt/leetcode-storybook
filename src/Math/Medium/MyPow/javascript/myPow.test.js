import solution1 from './myPow1.es3.cjs';
import solution2 from './myPow2.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Math/Medium/[50] Pow(x, n)]/Binary Search - Case %#',
  (name, testCase) => expect(runTestCase(solution1, testCase)).toEqual(testCase.expected),
);

test.each(cases.map(c => [c.name, c]))(
  '[Math/Medium/[50] Pow(x, n)]/Recursion - Case %#',
  (name, testCase) => expect(runTestCase(solution2, testCase)).toEqual(testCase.expected),
);

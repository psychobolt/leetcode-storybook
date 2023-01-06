import solution from './findMedianSortedArrays.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.skip.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Hard/[4] Median of Two Sorted Arrays] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

import solution from './smallestDistancePair.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each.skip(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Hard/[719] Find K-th Smallest Pair Distance] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

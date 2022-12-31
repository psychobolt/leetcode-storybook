import solution from './twoSum.es3.cjs';
import runTestCase, { cases } from '../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Medium/[167] Two Sum II - Input Array Is Sorted/Binary Search] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

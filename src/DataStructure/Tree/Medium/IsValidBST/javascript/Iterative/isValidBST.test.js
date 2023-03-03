import solution from './isValidBST.es3.cjs';
import runTestCase, { cases } from '../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Tree/Medium/[98] Validate Binary Search Tree/Iterative] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

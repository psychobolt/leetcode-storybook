import solution from './maxDepth.es3.cjs';
import runTestCase, { cases } from '../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Tree/Easy/[104] Maximum Depth of Binary Tree/Bottom Up] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

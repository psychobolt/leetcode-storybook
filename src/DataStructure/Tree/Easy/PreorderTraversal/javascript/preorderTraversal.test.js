import solution from './preorderTraversal.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Tree/Easy/[144] Binary Tree Preorder Traversal] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

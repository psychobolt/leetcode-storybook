import serialize from 'btree-serialize';

import solution from './buildTree.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Tree/Medium/[105] Construct Binary Tree from Preorder and Inorder Traversal] - Case %#',
  (name, testCase) => expect(JSON.parse(serialize(runTestCase(solution, testCase))))
    .toEqual(testCase.expected),
);

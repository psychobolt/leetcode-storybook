import serialize from 'btree-serialize';

import solution from './buildTree.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Tree/Medium/[106] Construct Binary Tree from Inorder and Postorder Traversal] - Case %#',
  (name, testCase) => expect(JSON.parse(serialize(runTestCase(solution, testCase))))
    .toEqual(testCase.expected),
);

import solution from './getIntersectionNode.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Easy/[160] Intersection of Two Linked Lists] - Case %#',
  (name, testCase) => {
    const result = runTestCase(solution, testCase);
    expect(result ? result.val : 0).toEqual(testCase.expected);
  },
);

import solution from './detectCycle.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Medium/[142] Linked List Cycle II] - Case %#',
  (name, testCase) => {
    const result = runTestCase(solution, testCase);
    expect(result ? result.index : null).toEqual(testCase.expected);
  },
);

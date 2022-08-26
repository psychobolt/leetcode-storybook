import LinkedList from 'linked-list';

import solution from './rotateRight.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Medium/[61] Rotate List] - Case %#',
  (name, testCase) => expect(
    LinkedList.prototype.toArray.call({ head: runTestCase(solution, testCase) }),
  ).toEqual(testCase.expected),
);

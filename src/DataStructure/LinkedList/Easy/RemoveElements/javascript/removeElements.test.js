import LinkedList from 'linked-list';

import solution from './removeElements.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Easy/[203] Remove Linked List Elements] - Case %#',
  (name, testCase) => expect(
    LinkedList.prototype.toArray.call({ head: runTestCase(solution, testCase) }),
  ).toEqual(testCase.expected),
);

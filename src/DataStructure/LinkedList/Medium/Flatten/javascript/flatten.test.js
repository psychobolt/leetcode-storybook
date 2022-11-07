import LinkedList from 'linked-list';

import solution from './flatten.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Linked List/Medium/[430] Flatten a Multilevel Doubly Linked List] - Case %#',
  (name, testCase) => expect(
    LinkedList.prototype.toArray.call({ head: runTestCase(solution, testCase) }),
  ).toEqual(testCase.expected),
);

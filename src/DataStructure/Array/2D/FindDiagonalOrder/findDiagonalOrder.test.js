import runTestCase, { cases } from './testCases.js';

import findDiagonalOrder from './findDiagonalOrder.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  '[Array/2D/Find Diagonal Order] - Case %#',
  (name, testCase) => expect(runTestCase(findDiagonalOrder, testCase)).toEqual(testCase.expected),
);

import runTestCase, { cases } from './testCases.js';

import findDiagonalOrder from './findDiagonalOrder.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  'Data Structure/Array/2D/[498] Diagonal Traverse - Case %#',
  (name, testCase) => expect(runTestCase(findDiagonalOrder, testCase)).toEqual(testCase.expected),
);

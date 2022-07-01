import runTestCase, { cases } from './testCases.js';

import plusOne from './plusOne.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  'Data Structure/Array/1D/[66] Pivot Index - Case %#',
  (name, testCase) => expect(runTestCase(plusOne, testCase)).toEqual(testCase.expected),
);

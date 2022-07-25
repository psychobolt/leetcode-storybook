import runTestCase, { cases } from './testCases.js';

import findPivot from './pivotIndex.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  'Data Structure/Array/1D/Array/[724] Pivot Index - Case %#',
  (name, testCase) => expect(runTestCase(findPivot, testCase)).toEqual(testCase.expected),
);

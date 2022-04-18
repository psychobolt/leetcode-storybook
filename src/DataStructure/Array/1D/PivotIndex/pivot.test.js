import runTestCase, { cases } from './testCases.js';

import findPivot from './pivot.es3.cjs';

test.each(cases.map(c => [c.name, c]))(
  '[Array/1D/Pivot Index] - Case %#',
  (name, testCase) => expect(runTestCase(findPivot, testCase)).toEqual(testCase.expected),
);

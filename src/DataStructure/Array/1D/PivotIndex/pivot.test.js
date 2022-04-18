import runTestCase, { cases } from './testCases.js';

import findPivot from './pivot.es3.cjs';

test('[Array/1D/Pivot Index] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(findPivot, testCase)).toEqual(testCase.expected);
  });
});

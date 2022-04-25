import runTestCase, { cases } from './testCases.js';

import plusOne from './plusOne.es3.cjs';

test('[Data Structure/Array/1D/Pivot Index] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(plusOne, testCase)).toEqual(testCase.expected);
  });
});

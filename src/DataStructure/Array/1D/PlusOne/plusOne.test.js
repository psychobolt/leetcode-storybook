import runTestCase, { cases } from './testCases.js';

import plusOne from './plusOne.es3.cjs';

test('[Array/1D/Plus One] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(plusOne, testCase)).toEqual(testCase.expected);
  });
});

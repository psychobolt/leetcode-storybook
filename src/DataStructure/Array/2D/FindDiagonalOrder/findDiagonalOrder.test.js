import runTestCase, { cases } from './testCases.js';

import findDiagonalOrder from './findDiagonalOrder.es3.cjs';

test('[Array/2D/Traverse Diagonal] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(findDiagonalOrder, testCase)).toEqual(testCase.expected);
  });
});

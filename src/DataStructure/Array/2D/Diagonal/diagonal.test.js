import runTestCase, { cases } from './testCases';

import findDiagonalOrder_es5 from './diagonal.es5';

test('Array (2D) - Find Diagonal Order (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(findDiagonalOrder_es5, testCase)).toEqual(testCase.expected);
  });
});
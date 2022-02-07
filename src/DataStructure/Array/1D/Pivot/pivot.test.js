import runTestCase, { cases } from './testCases';

import findPivot_es5 from './pivot.es5';

test('Array - Find Pivot (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(findPivot_es5, testCase)).toEqual(testCase.expected);
  });
});
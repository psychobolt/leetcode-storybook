import runTestCase, { cases } from './testCases';

import plusOne_es5 from './plusOne.es5';

test('Array - Plus One (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(plusOne_es5, testCase)).toEqual(testCase.expected);
  });
});
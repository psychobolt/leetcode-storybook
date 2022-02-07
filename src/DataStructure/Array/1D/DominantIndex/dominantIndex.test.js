import dominantIndex_es5 from './dominantIndex.es5';
import runTestCase, { cases } from './testCases';

test('Dominant Index (es5) - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(dominantIndex_es5, testCase)).toEqual(testCase.expected);
  });
});
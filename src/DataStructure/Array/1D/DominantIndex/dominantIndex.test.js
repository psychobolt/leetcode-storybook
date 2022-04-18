import dominantIndex from './dominantIndex.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test('[Array/1D/Dominant Index] - Run all test cases', () => {
  cases.forEach(testCase => {
    expect(runTestCase(dominantIndex, testCase)).toEqual(testCase.expected);
  });
});

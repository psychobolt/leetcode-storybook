import solution from './removeDuplicates.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[26] Remove Duplicates from Sorted Array] - Case %#',
  (name, testCase) => {
    const { input, expected } = testCase;
    expect(runTestCase(solution, testCase)).toEqual(expected.k);
    expect(input).toEqual(expected.nums);
  },
);

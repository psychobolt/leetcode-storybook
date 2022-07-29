import solution from './removeElement.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[27] Remove Element] - Case %#',
  (name, testCase) => {
    const { input, expected } = testCase;
    expect(runTestCase(solution, testCase)).toEqual(expected.k);
    expect(input.nums.sort()).toEqual(expected.nums.sort());
  },
);

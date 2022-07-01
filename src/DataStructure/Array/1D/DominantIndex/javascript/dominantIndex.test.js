import dominantIndex from './dominantIndex.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  'Data Structure/Array/1D/[747] Largest Number At Least Twice of Others - Case %#',
  (name, testCase) => expect(runTestCase(dominantIndex, testCase)).toEqual(testCase.expected),
);

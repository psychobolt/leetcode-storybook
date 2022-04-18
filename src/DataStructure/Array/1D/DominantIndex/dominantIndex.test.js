import dominantIndex from './dominantIndex.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Array/1D/Dominant Index] - Case %#',
  (name, testCase) => expect(runTestCase(dominantIndex, testCase)).toEqual(testCase.expected),
);

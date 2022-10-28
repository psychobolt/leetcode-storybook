import solution from './floodFill.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/2D/Easy/[733] Flood Fill] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

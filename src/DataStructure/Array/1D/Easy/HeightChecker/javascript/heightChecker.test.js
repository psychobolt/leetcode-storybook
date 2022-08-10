import solution from './heightChecker.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[1051] Height Checker] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

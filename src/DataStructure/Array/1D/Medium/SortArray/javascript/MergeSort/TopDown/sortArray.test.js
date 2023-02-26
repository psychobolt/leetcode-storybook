import solution from './sortArray.es3.cjs';
import runTestCase, { cases } from '../../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Medium/[912] Sort an Array/Merge Sort/Top Down] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

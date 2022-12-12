import solution2 from './findPeakElementTemplate2.es3.cjs';
import solution3 from './findPeakElementTemplate3.es3.cjs';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Medium/[162] Find Peak Element]/Template II - Case %#',
  (name, testCase) => expect(runTestCase(solution2, testCase)).toEqual(testCase.expected),
);

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Medium/[162] Find Peak Element]/Template III - Case %#',
  (name, testCase) => expect(runTestCase(solution3, testCase)).toEqual(testCase.expected),
);

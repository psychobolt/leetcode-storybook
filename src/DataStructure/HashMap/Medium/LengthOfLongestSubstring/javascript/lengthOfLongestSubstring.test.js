import solution from './lengthOfLongestSubstring.js';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Hash Map/Medium/[3] Longest Substring Without Repeating Characters] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase)).toEqual(testCase.expected),
);

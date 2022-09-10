import solution from './topKFrequent.js';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Hash Map/Medium/[347] Top K Frequent Elements] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

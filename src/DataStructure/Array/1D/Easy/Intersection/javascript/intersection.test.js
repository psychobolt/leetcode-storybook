import solution from './intersection.js';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[349] Intersection of Two Arrays] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

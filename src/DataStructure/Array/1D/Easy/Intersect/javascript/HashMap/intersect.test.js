import solution from './intersect.js';
import runTestCase, { cases } from '../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[350] Intersection of Two Arrays II/Hash Map] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

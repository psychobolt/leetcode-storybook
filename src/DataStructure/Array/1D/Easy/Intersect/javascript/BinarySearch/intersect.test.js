import solution from './intersect.es3.cjs';
import runTestCase, { cases } from '../testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[350] Intersection of Two Arrays II/Binary Search] - Case %#',
  (name, testCase) => expect(runTestCase(solution, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

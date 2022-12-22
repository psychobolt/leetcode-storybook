import solutionHS from './intersectionHashSet.js';
import solutionBS from './intersectionBinarySearch.js';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[349] Intersection of Two Arrays] - Case %# (Hash Set)',
  (name, testCase) => expect(runTestCase(solutionHS, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Array/1D/Easy/[349] Intersection of Two Arrays] - Case %# (Binary Search)',
  (name, testCase) => expect(runTestCase(solutionBS, testCase).sort())
    .toEqual(testCase.expected.sort()),
);

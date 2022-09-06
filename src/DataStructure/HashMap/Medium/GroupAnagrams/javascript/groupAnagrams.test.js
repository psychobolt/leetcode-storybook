import _ from 'lodash';

import solution from './groupAnagrams.js';
import runTestCase, { cases } from './testCases.js';

test.each(cases.map(c => [c.name, c]))(
  '[Data Structure/Hash Map/Medium/[49] Group Anagrams] - Case %#',
  (name, testCase) => runTestCase(solution, testCase)
    .forEach(group1 => expect(testCase.expected.find(group2 => _
      .isEqual(group1.sort(), group2.sort()))).toBeTruthy()),
);

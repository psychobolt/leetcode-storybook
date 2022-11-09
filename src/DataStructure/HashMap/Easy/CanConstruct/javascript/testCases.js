import json from '../testCases.json';

export const cases = json;

export default (
  runSolution,
  { input: { ransomNote, magazine } },
) => runSolution(ransomNote, magazine);

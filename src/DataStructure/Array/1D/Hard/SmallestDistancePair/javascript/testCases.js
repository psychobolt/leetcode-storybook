import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { nums, k } }) => runSolution(nums, k);

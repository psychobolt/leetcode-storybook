import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { nums, target } }) => runSolution(nums, target);

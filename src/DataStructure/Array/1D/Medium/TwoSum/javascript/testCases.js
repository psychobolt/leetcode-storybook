import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { numbers, target } }) => runSolution(numbers, target);

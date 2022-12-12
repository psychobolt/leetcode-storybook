import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { arr, k, x } }) => runSolution(arr, k, x);

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { matrix, target } }) => runSolution(matrix, target);

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { x, n } }) => runSolution(x, n);

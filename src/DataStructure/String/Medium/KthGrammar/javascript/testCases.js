import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { n, k } }) => runSolution(n, k);

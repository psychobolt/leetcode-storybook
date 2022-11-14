import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { n, bad } }) => runSolution(version => version >= bad)(n);

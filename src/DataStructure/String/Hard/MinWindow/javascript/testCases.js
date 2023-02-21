import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { s, t } }) => runSolution(s, t);

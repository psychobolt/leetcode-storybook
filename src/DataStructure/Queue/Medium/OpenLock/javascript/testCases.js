import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { deadends, target } }) => runSolution(deadends, target);

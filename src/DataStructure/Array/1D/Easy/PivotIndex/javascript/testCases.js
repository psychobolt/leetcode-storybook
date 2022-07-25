import json from '../testCases.json';

export const cases = json;

const runTestCase = (findPivot, { input }) => findPivot(input);

export default runTestCase;

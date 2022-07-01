import json from '../testCases.json';

export const cases = json;

const runTestCase = (plusOne, { input }) => plusOne(input);

export default runTestCase;

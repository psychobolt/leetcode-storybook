import json from '../testCases.json';

export const cases = json;

const runTestCase = (dominantIndex, { input }) => dominantIndex(input);

export default runTestCase;

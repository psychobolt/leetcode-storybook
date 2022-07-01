import json from '../testCases.json';

export const cases = json;

const runTestCase = (findDiagonalOrder, { mat }) => findDiagonalOrder(mat);

export default runTestCase;

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { inorder, postorder } }) => runSolution(inorder, postorder);
